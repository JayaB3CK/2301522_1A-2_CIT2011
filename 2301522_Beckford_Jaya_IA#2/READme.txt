File Name:      2301522_LAB 2_CIT2011

Student Name:   Jaya Beckford

Student ID:     2301522

Assignment:     IA 2

Date:           30/10/2026

 

-----------------------------------------------------------------------------

🤖 GENERIC AI TOOL UTILISED (Check all that apply):

[ ] GitHub Copilot     [x] ChatGPT     [ ] Claude     [x] Deepseek    [ ] None

-----------------------------------------------------------------------------

 

📝 SCOPE OF WORK & DEBUGGING LOG:

1. Specific Bug/Error Encountered:

   a. My graphic files were either not added in background where the text can sit on top of it 
   b. the "squiggily line was somehow combined in the text on the login page.
   c. The "generate my ticket" button wasnt working
   d. why does mask-composite not work on stack flex?'
   e. I was unable to replicate most of the background so i ask deepseek"How can i replicate this background if the design files does not work?"

 

2. Exact Prompt Sent to AI Tool:

   "My swirly line jpg should be in the corner on my website how can I fix it?"
   "How can i replicate this background if the design files does not work?"

  

3. Resolution/Fix Applied:

   "Code to fix: Look at the HTML snippet, specifically the end of the <main> section." AI targetted that I forget to fix my imag on the left and gave me this code to fix the issue,"style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" makes the image take up the entire screen and overlay everything (covering the website)"
   The lines for the background was because the file name was incorrect--hence why my lines were sitting on top of my website. The  fix: added a separate media query with the vertical mask
   The squiggily line bug was because i did not specify my position, i.e, bottom-left

-----------------------------------------------------------------------------

⚠️ INTEGRITY VERIFICATION DECLARATION:

By submitting this file, I certify that the core algorithmic logic, program

architecture, and data structures implemented herein are entirely my own

authentic work. AI assistance was restricted strictly to debugging and/or

generating explanatory documentation comments in full compliance with the

course syllabus.

 

Student Electronic Signature: J.Beckford