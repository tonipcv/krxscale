from flask import Flask, request, jsonify
from youtube_transcript_api import YouTubeTranscriptApi
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/transcript', methods=['POST'])
def get_transcript():
    try:
        data = request.get_json()
        video_id = data.get('video_id')
        
        if not video_id:
            return jsonify({'error': 'Video ID is required'}), 400

        # Try to get transcript in Portuguese first
        try:
            transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=['pt'])
        except:
            # If Portuguese is not available, try any language
            transcript = YouTubeTranscriptApi.get_transcript(video_id)
        
        return jsonify({'transcript': transcript})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(port=8000) 