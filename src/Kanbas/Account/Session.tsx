import * as client from "./client";
import { useEffect, useState, useCallback } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import { User } from "../types";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  
  // Use call back to fix the alert
  const fetchProfile = useCallback(async () => {
    try {
      const currentUser: User | null = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }
    setPending(false);
  }, [dispatch]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  
  if (!pending) {
    return children;
  }

  return <>{children}</>;
}
