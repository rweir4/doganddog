class Api::V1::MailersController < ApplicationController
  def send
    debugger
    @mailer = mailer_params

    GeneralMailer.with(user: @mailer).customer_inquiry.deliver_now
  end

  private

  def mailer_params
    params.require(:mailer).permit(:name, :email, :message)
  end
end