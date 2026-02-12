import type { PairingChannel } from "./pairing-store.js";
import { formatCliCommand } from "../cli/command-format.js";

export function buildPairingReply(params: {
  channel: PairingChannel;
  idLine: string;
  code: string;
}): string {
  const { channel, idLine, code } = params;
  return [
    "چِرتکه | حسابدار هوشمند برای شما فعال نیست لطفا کد زیر را به صاحب ربات بدهید تا تایید کند",
    "",
    idLine,
    "",
    `کد جفت‌سازی: ${code}`,
    "",
    "@Retrotechdeveloper از صاحب ربات بخواهید با دستور زیر تایید کند:",
    // formatCliCommand(`openclaw pairing approve ${channel} ${code}`),
  ].join("\n");
}
