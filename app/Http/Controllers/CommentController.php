<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;


class CommentController extends Controller
{
    public function __construct(Request $request)
    {
        $this->user = auth()->setRequest($request)->user();

    }
    public function store(Request $request,$user_id)
    {

        $validData = $request->validate([
            'content' => 'required|string'
        ]);
        $create_comment = Comment::create([
            'content' => $validData['content'],
            'post_id' => $request->post_id,
            'approved' => 1,
            'point' =>$request->point,
            'user_id' =>$this->user->id,
        ]);
     /*   $comment = new Comment(['content' => $validData['content']]);
        $comment->id = rand(1,100000);
        $comment->post_id = $request->post_id;
        $comment->approved = 1;
        $comment->point = $request->point;
        $comment->user_id = $user_id;

        $comment->save();*/

        session()->flash('commentResult', [
            'message' => 'Comment added successfully, it will appear after approval',
            'success' => true
        ]);
        return redirect()->back();
//        return redirect($post->specificResourcePath());
    }

    public function edit(Comment $comment)
    {
        return view('comment-edit', [
            'comment' => $comment
        ]);
    }

    public function update(Request $request, Comment $comment)
    {
        $validData = $request->validate([
            'content' => 'required|string'
        ]);

        $comment->update([
            'content' => $validData['content'],
            'approved' => 0
        ]);

        session()->flash('commentResult', [
            'message' => 'Comment updated successfully, it will appear after approval',
            'success' => true
        ]);

        return redirect($comment->post->specificResourcePath());
    }

    public function destroy(Comment $comment)
    {
        $comment->delete();

        session()->flash('commentResult', [
            'message' => 'Comment deleted successfully',
            'success' => true
        ]);

        return redirect($comment->post->specificResourcePath());
    }

    public function approve(Comment $comment)
    {
        return $comment->update(['approved' => true]);
    }

    public function undoApproval(Comment $comment)
    {
        return $comment->update(['approved' => false]);
    }
}
