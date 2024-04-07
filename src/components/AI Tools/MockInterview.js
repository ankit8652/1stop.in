import React from "react";

function MockInterview() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 8%",
          }}
        >
          <div>
            <p>Included with Premium Membership</p>
            <h2>Ace your upcoming job interviews!</h2>
            <p>
              Practice role and company specific interview questions and get
              real-time feedback from your private and judgment-free AI
              Interview Coach
            </p>
            <span
              style={{
                padding: "2%",
                backgroundColor: "#508DE8",
                color: "white",
              }}
            >
              Start Your Mock Interview!
            </span>
            <p>Powered by</p>
          </div>
          <img
            src="https://app.careerflow.ai/static/media/mock_interview_hero.94b2adcd331626a11ffb.png"
            width={"50%"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>View an AI Mock Interview in action</h2>
          <div style={{ borderRadius: "15px", overflow: "hidden" }}>
            <iframe
              width="600px"
              height="300px"
              src="https://www.youtube.com/embed/hNr1a2MC91k?si=btZOGjHpWAms19x-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div style={{ textAlign: "center", width: "54.5%" }}>
            <p>
              We've partnered with Yoodli.ai to bring you an AI powered Mock
              Interview with an AI Interview Coach, with unlimited usage
              included as a part of the Careerflow.ai Premium Subscription, at
              no additional charge!
            </p>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "3%",
          }}
        >
          <h2>How the AI Mock Interview Works</h2>
        </div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            padding: "0 10%",
            gap: "5%",
          }}
        >
          <div>
            <img
              src="https://app.careerflow.ai/static/media/mock_interview_select_role.30537f016bbaeecd5b5c.png"
              width={"80%"}
            />
          </div>
          <div>
            <h3>Choose your target Role and Company</h3>
            <p>
              The AI system tailors each interview for your target role and
              company, so that you can be fully prepared! You can enter any role
              ranging from Junior PM to CEO!
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            padding: "0 10%",
            gap: "10%",
          }}
        >
          <div>
            <h3>Practice Interview Questions</h3>
            <p>
              With thousands of questions in Careerflow's question bank, and the
              AI asking contextualized follow-up questions based on your
              answers, you'll be ready in no time!
            </p>
          </div>
          <div>
            <img
              src="https://app.careerflow.ai/static/media/mock_interview_questions.6b943ee2b30d43414876.png"
              width={"80%"}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            padding: "0 10%",
            gap: "5%",
          }}
        >
          <div>
            <img
              src="https://app.careerflow.ai/static/media/mock_interview_analytics.708c9b1390682bef0815.png"
              width={"80%"}
            />
          </div>
          <div>
            <h3>Receive Instant Feedback</h3>
            <p>
              You'll get a report with question-by-question feedback, speech
              insights, and AI insights to help you feel confident for your
              upcoming interview!
            </p>
          </div>
        </div>
        <div style={{ padding: "5%", textAlign: "center" }}>
          <span
            style={{
              padding: "1%",
              backgroundColor: "#508DE8",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Start Your Mock Interview!
          </span>
        </div>
      </div>
    </>
  );
}

export default MockInterview;
