import { inngest } from "../client"
import User from "../../models/user.js"
import { NonRetriableError } from "inngest";
import { sendMail } from "../../utils/mailer";


export const onUserSignup = inngest.createFunction(
  { id: "on-user-signup",retries: 2 },
  { event: "user/signup" },
  async ({event,step}) => {
    try{
        const {email} = event.data;
        const userobject = await step.run("get-useremail",async () => {
         const user = await User.findOne({email});
          if(!user){
            throw new NonRetriableError("User no longer exists in our databases")
          }
          return user
        });

        await step.run("send-welcome-email",async () => {
            const subject = "Welcome to the app"
            const message = `Hi,
            \n\n
            Thanks for signing up.We are
            glad to have you on board`

            await sendMail(email,subject,message);
        })
        return{success : true}

    }catch(error){
        console.error("Error running step",error.message)
        return {
            success: false,}
    }

  }
);