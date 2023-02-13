class Subscription < ApplicationRecord
  validate :email_format_valid?

  def email_format_valid?
    if !email.present? || invalid_format?
      errors.add(:email, 'Email must be valid')
    end
  end

  private

  def invalid_format?
    username, domain, extension = email.split(/[@, .]/)
    username.blank? || domain.blank? || extension.blank?
  end
end