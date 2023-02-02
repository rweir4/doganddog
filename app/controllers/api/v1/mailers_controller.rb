class Api::V1::MailersController < ApplicationController
  def customer_inquiry
    @mailer = mailer_params

    CustomerInquiryMailer.with(mailer: @mailer).customer_inquiry.deliver_now
  end

  private

  def mailer_params
    params.require(:mailer).permit(:name, :email, :message)
  end
end