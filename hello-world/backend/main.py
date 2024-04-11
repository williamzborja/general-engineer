from flask import Flask, jsonify, request

app = Flask(__name__)

posts = [
    {"id": 1, "title": "First Post", "content": "This is the content of the first post."},
    {"id": 2, "title": "Second Post", "content": "This is the content of the second post."}
]

@app.route('/posts', methods=['GET'])
def get_posts():
    return jsonify(posts)


@app.route('/posts/<int:id>', methods=['GET'])
def get_post(post_id):
    post = next((post for post in posts if post['id'] == post_id), None)

    if not post:
        return jsonify({'error': 'Post not found'}), 404

    return jsonify(post)

@app.route('/posts/<int:id>', methods=['POST'])
def create_post():
    data = request.json

    if 'title' not in data or 'cotent' not in data:
        return jsonify({'error', 'Missing title or content'})
    new_post = {
        'id': len(posts) + 1,
        'title': data['title'],
        'content': data['content']
    }

    posts.append(new_post)
    return jsonify(new_post), 201


@app.route('/posts/<int:id>', methods=['PUT'])
def update_post(post_id):
    post = next((post for post in posts if post['id'] == post_id), None)

    if not post:
        return jsonify({'error': 'post not found'}), 404

    data = request.json
    post['title'] = data.get('title', post['title'])
    post['content'] = data.get('content', post['content'])
    return jsonify(post)

@app.route('/posts/<int:id>', methods=['DELETE'])
def delete_post(id):
    global posts
    posts = [post for post in posts if post['id'] != id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
