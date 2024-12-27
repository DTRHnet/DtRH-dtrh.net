## DTRH.net ##

Simply a place for me to go when I am in my head..
Or want to explore something new
Or show the world something
about me

This is where I can just be me, unfiltered and raw.

To get the ball rolling, I have been taking an interest in bug bounty, and figured getting familiar with web and javascript would be a good start.
I combined this with my love for ascii art, no matter how bad I am at it, and wrote bunny.js to do the following

1. Load an ascii art file Ive made and draw it to screen
2. Take a secret, encoded in base64, and draw it as one would read (top to bottom, left to right) character by character in every empty space detected, within the border.
3. Performs a few visual changes, like fading in and out, and dancing randomized characters.
4. No decoding function is provided, but given there is a small chance someone from my world might check this, I offer its decoded text below



/* To be continued...

▓▓▓▓▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   Beneath the surface,
▓QmVuZWF█▓▓0aCB0aGUgc3VyZmFjZSwKYSByYWJiaXQgY2FydmVzIGl0cyBob21lLgpU▓   a rabbit carves its home.
▓aGUgdHV█▓▓█▓ubmVscyB0d2lzdCB3aXRob3V0IHJlYXNvbiwK▓▓▓▓▓▓▓▓YnV0IHRoZS▓   The tunnels twist without reason,
▓BwdXJwb█▓▓██▓3NlIGlzIGNsZWFyOgpwcm90ZWN0aW9uLCB▓▓▓███████▓▓▓lc2NhcG▓   but the purpose is clear:
▓UsCmEgcX█▓▒▓██▓VpZXQgcGxhY2UgdG8gYnJlYXRoZS4KV█▓▓▓█████████▓▓2hhdCB▓   protection, escape,
▓sb29rcy█▓▒▓██▓▓BsaWtlIGNoYW9zIGFib3ZlCmlzIG9██▓██████yZGVyIGJlbG93L▓   a quiet place to breathe.
▓AplYWNoIG█▓▒▓██▓▓NoYW1iZXIgYSBjaG9pY2UsCmVhY█████████2ggcGF0aCBhIHN▓   What looks like chaos above
▓0b3J5IHVud█▓▓▓▓█▓▓█G9sZC4KCkFib3ZlIHRoZSBzdX████████JmYWNlLCB0aGUgc▓   is order below,
▓3RhcnMgZm9s█▓▓▓▓█▓▓▓ZCB0aW1lLgpQYXJ0aWNsZXMg███▓▓▓▓dG91Y2ggYWNyb3Nz▓   each chamber a choice,
▓IGltcG9zc2li█▓▒▓██▓▓bGUgZGlzdGFuY2VzLAphcyB0█▓█▓█▓aG91Z2ggc3BhY2Ugb▓   each path a story.
▓mV2ZXIgbWF0dG█▓▓▓██▓▓VyZWQuCk9uZSB0dXJucywgd██▓▒▓▓GhlIG90aGVyIGtub3▓
▓dzLgpFbnRhbmds▓▒▓▓█▓▓ZW1lbnQsIHRoZXkgY2FsbCB█████pdOKAlAphIHdvcmQgZ▓   Above the surface, the stars fold time.
▓m9yIHNvbWV0aGl█▓▒▓▓█▓█uZyB3ZeKAmWxsIG5ldmVy████▓▓IGZ1bGx5IGdyYXNwLg▓   Particles touch across impossible distances,
▓pNYXliZSBpdOKA█▓▓▓██▓▓mXMgYSB0aHJlYWQsCm1he█▓█▓▓WJlIGl04oCZcyBhIHR1▓   as though space never mattered.
▓bm5lbCwKbWF5Ym██▓▓▓█▓▓UgaXTigJlzIGp1c3QgdG██▓▓▓▓hlIHdheSB0aGUgdW5pd▓   One turns, the other knows.
▓mVyc2Ugd2hpc3Bl▓▒▒▓▓█▓▓cnMKdG8gaXRzZWxmLgo██▓▓▓KVGhlIGZvcmVzdCBrbm9▓   Entanglement, they call it--
▓3cyB0aGlzIGxhbm██▓▓▓▓▓▓▓d1YWdlLCB0b28uCkJl██▓▓▓▓bmVhdGggaXRzIHJvb3R▓   a word for something we'll never fully grasp.
▓zLCBhIG5ldHdvcms█▓▓▓▓▓▓▓gaHVtcy4KTXljZWxp███▓█▓▓dW0gd2VhdmVzIHRoZSB▓   Maybe it's a thread,
▓kZWFkIGludG8gdGh███▓▒▓▓▓▓lIGxpdmluZywKY2██▓▓████FycmllcyB3YXJuaW5nc▓   maybe it's a tunnel,
▓yBmcm9tIHRyZWUgdG████▓▓▓█8gd▓▓▓▓H▓▓▓▓▓Jl██████ZS4KQSBtb3RoZXIgb2FrI▓   maybe it's just the way the universe whispers
▓GZlZWRzIGhlciBzYXBs████▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███████aW5ncwp0aHJvdWdoIGlud▓   to itself.
▓mlzaWJsZSB2ZWlucyw████▓▓▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██▓Kd2hpbGUgYSBmYWxsZW4g▓
▓Z2lhbnQgY3J1bWJsZX▓▓█▓▓▓█▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓MKaW50byBub3VyaXNobWV▓   The forest knows this language, too.
▓udCBmb3IgdGhlIHdo▓██▓▓██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓b2xlLgpUaGUgZm9yZXN0▓   Beneath its roots, a network hums.
▓IGlzIG5vdCB0cmVlc██▓█▓█▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▓▓▓▒▓▓▓▓zsKaXQgaXMgdGhlIHNwY▓   Mycellium weaves the dead into the living,
▓WNlIGJldHdlZW4gdG█▓▓█▓▓███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓▓hlbS4KCkFuZCBzbyBhcm▓   carries warnings from tree to tree.
▓Ugd2UuCkJlbmVhdGg▓███▓▓█▓▓███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓gdGhvdWdodCwKYmVuZWF▓   A mother oak feeds her saplings
▓0aCB0aGUgc3VyZmFj██▓██▓▓█████▓█▓▓▓█▓▓▓▒▓▓▓▒▓▓▓▓▓ZSBvZiBhd2FyZW5lc3M▓   through invisible veins,
▓sCm91ciBtaW5kcyB█████▓██▓▓▓▓█████▓▓██▓▓██▓▓▓▓██0d2lzdCBpbnRvIHR1bm5▓   while a fallen giant crumbles
▓lbHMuCk1lbW9yaWVz█▓██IG██████▓▓▓▓▓▓▓████Nvb▓▓▓█m5lY3Qgd2hlcmUgdGhle▓   into nourishment for the whole.
▓SBzaG91bGRu4oCZdC████4KRHJl█▓▓█▓▓▓▓█YW1zIG█▓▓▓▓dyb3cgb3V0IG9mIGZvcm▓   The forest is not trees;
▓dvdHRlbiBzb2lsLgpX███▓ZSB0aGl██▓▓▓▓uayB3Z██▓█▓▓SBhcmUgYWxvbmUsCmJ1d▓   it is the space between them.
▓CB0aGUgc3ViY29uc2N▓██▓█▓pb3V███▓▓▓▓zIHR▓▓█▓███lbGxzIGEgZGlmZmVyZW50▓
▓IHN0b3J5LgpXZSBhcmUgd█████▓█▓▓███▓▓▓███▓█▓█2VicywKZW50YW5nbGVkLApid▓   And so are we.
▓XJpZWQgaW4gY29ubmVjdGlvbn█▓████████▓▓▓▓Mgd2XigJlsbCBuZXZlciBmdWxseS▓   Beneath thought,
▓BzZWUuCgpBIHJhYmJpdCBid▒██▓████▓▓▓▓▓▓▓▓▓XJyb3cuCkEgcXVhbnR1bSB0aHJl▓   beneath the surface of awareness,
▓YWQuCkEgZnVuZ2FsIHdlYi4▓▓▓████▓█▓▓▓▓▓▓▓▒▒KQSBoaWRkZW4gdGhvdWdodC4KC▓   our minds twist into tunnels.
▓kVhY2ggb25lIGEgcmFiYml0IG▓▓█▓█▒▒█▓██▒█▒▒hvbGUsCmxlYWRpbmcgc29tZXdoZ▓   Memories connect where they shouldn't.
▓XJlIHdlIGNhbm5vdCBuYW1lLgp▓▓▓▓▓▒▓▒▒▓▒O▓b3QgY2hhb3MsCmJ1dCBzdHJ1Y3R1▓   Dreams grow out of forgotten soil.
▓cmUKd2XigJlyZSB0b28gY2xvc2U▓g▓▓d▓▓G▓8gdW5kZXJzdGFuZC4KVGhlIGRlZXBlc▓   We think we are alone,
▓iB5b3UgZ28sCnRoZSBtb3JlIGl0IGhvbGRzLgpUaGUgZGVlcGVyIHlvdSBnbywKdGhl▓   but the subconscious tells a different story.
▓I██▓██▓▓█████▓█▓▓▓█▓▓▓▒▓G1vcmUgaXQgZnJlZXM▓█▓▓▓▒▓▓▓██▓██▓▓█████▓█▓u▓   We are webs, entangled,
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   buried in connections we'll never fully see.

 [ PICTURED - Base64 encoded string over ASCII art programatically ]    A rabbit burrow.
                                                                        A quantum thread.
 [ The encoded text is decoded on the right.                       ]    A hidden thought.
 [ I hope you enjoy it                                             ]    A fungal web.
   
 [ KBS                                                             ]    Each one a rabbit hole,  
                                                                        leading somewhere we cannot name.
                                                                        Not chaos,
                                                                        but structure
                                                                        we're too close to understand
                                                                        The deeper you go
                                                                        the more it holds.
                                                                        The deeper you go,
                                                                        the more it frees.
                                                                        
                                                                        
December 26, 2024

EOF */