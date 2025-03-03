import { UilEnvelope, UilLinkedin, UilGithub } from '@iconscout/react-unicons';

export const IconEnvelope = ({ size = 20, color = "currentColor", ...props }) => (
  <UilEnvelope size={size} color={color} {...props} />
);

export const IconLinkedin = ({ size = 20, color = "currentColor", ...props }) => (
  <UilLinkedin size={size} color={color} {...props} />
);

export const IconGithub = ({ size = 20, color = "currentColor", ...props }) => (
  <UilGithub size={size} color={color} {...props} />
); 