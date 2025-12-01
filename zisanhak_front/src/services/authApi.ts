import { api } from "../lib/apiClient";
import { setAccessToken, setRefreshToken, clearTokens } from "../lib/tokenStorage";

export interface SignupPayload {
  email: string;
  password: string;
  name: string;
  studentId: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  user: {
    id: string;
    email: string;
    name: string;
    studentId: string;
  };
}

export async function signup(payload: SignupPayload) {
  await api.post("/v1/auth/signup", payload);
}

export async function login(payload: LoginPayload) {
  const data = await api.post<AuthResponse>("/v1/auth/login", payload);
  setAccessToken(data.accessToken);
  if (data.refreshToken) {
    setRefreshToken(data.refreshToken);
  }
  return data.user;
}

export async function logout() {
  await api.post("/v1/auth/logout");
  clearTokens();
}

export async function getCurrentUser() {
  return api.get<AuthResponse["user"]>("/v1/auth/user/me");
}

export async function verifyEmail(token: string) {
  return api.get(`/v1/auth/verify?token=${encodeURIComponent(token)}`);
}

export async function deleteAccount() {
  await api.delete("/v1/auth/user/me");
  clearTokens();
}

export async function sendVerificationCode(email: string) {
  return api.post(`/v1/auth/send-code?email=${encodeURIComponent(email)}`);
}

export async function verifyEmailCode(email: string, code: string) {
  return api.post(`/v1/auth/verify-code?email=${encodeURIComponent(email)}&code=${encodeURIComponent(code)}`);
}

