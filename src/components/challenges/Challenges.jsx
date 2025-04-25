import React from "react";
import "./challenges.css";

const Challenges = () => {
  return (
    <section className="learnings section">
      <h2 className="section__title">Challenges & Learnings</h2>
      <span className="section__subtitle">A personal reflection</span>

      <div className="learnings__container container">
        {/* CHALLENGES */}
        <h3 className="section__heading">Challenges</h3>

        <div className="challenge__box">
          <h4 className="challenge__title">The Doubts: Am I Where I’m Supposed To Be?</h4>
          <p>
            When I started this course, it wasn’t my first choice. It was the only option available at the time, so I took it—hoping for the best. As time passed, I slowly started liking it. But every now and then, a voice creeps in asking, “Is this really where I’m meant to be?” It’s a question that doesn’t always have an answer, and that uncertainty can be hard to carry.
          </p>
        </div>

        <div className="challenge__box">
          <h4 className="challenge__title">Burnout & Loss of Passion</h4>
          <p>
            I work as a freelance PowerPoint designer and also create content—but lately, the excitement that once fueled my creativity has faded. There were moments when I just stared at the screen, knowing I had work to do but unable to feel anything about it. It’s scary to lose passion for things you used to love. I kept asking myself, “What’s wrong with me?” when maybe I just needed a break.
          </p>
        </div>

        <div className="challenge__box">
          <h4 className="challenge__title">Silent Battles</h4>
          <p>
            Not everything we struggle with is visible. There are days I smile outside but feel overwhelmed inside. Overthinking, anxiety, fear of not being good enough—these thoughts come quietly and stay longer than I want them to. I fight these battles silently because sometimes, I don’t even know how to put them into words.
          </p>
        </div>

        {/* LEARNINGS */}
        <h3 className="section__heading">Learnings</h3>

        <div className="learnings__box">
          <h4 className="learning__title">1. It’s Okay to Move Slowly</h4>
          <p>
            I’ve learned that life isn’t a race. It’s perfectly okay to take things one step at a time. I used to feel so pressured to catch up with others, but I now realize that growth looks different for everyone. As long as I’m moving forward—no matter how slowly—I’m still making progress.
          </p>
        </div>

        <div className="learnings__box">
          <h4 className="learning__title">2. Progress Isn’t Always Loud</h4>
          <p>
            There were times when I felt like I wasn’t achieving anything big. But now I understand that showing up, pushing through, and simply trying—even in silence—are forms of progress too. Not every success needs to be seen or shared; sometimes, the most important growth happens quietly.
          </p>
        </div>

        <div className="learnings__box">
          <h4 className="learning__title">3. It’s Valid to Feel Lost</h4>
          <p>
            Feeling lost doesn’t mean I’ve failed. It just means I’m still finding my way—and that’s part of the journey. I’ve accepted that uncertainty is normal, and rather than fear it, I’m learning to navigate through it with curiosity instead of shame.
          </p>
        </div>

        <div className="learnings__box">
          <h4 className="learning__title">4. I Am Growing</h4>
          <p>
            Even when it doesn’t feel like it, I am growing—emotionally, mentally, and in my own quiet way. Every time I push through a bad day, learn something new, or reflect deeply, I’m becoming a better version of myself. That’s something to be proud of.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
