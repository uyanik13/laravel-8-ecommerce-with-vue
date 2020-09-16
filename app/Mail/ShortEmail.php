<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ShortEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email,$subject,$data)
    {
        $this->email = $email;
        $this->subject = $subject;
        $this->data = $data;

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

      return $this->from($this->email)
                  ->subject($this->subject)
                  ->view('mail.short-email') ->with(
                    [
                      'data' => $this->data,
                     ]);

    }
}
