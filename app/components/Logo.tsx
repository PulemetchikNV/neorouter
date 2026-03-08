import { Text } from "~/components/retroui/Text";
import { useNavigate } from "react-router";

export const Logo = () => {
  let navigate = useNavigate()

  return (
    <Text
      as="h3"
      className="text-black hover:text-primary transition duration-300 ease-in-out cursor-pointer"
      onClick={() => navigate('/')}
    >NEOROUTER</Text>
  );
};