// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getBastionSession(args: GetBastionSessionArgs, opts?: pulumi.InvokeOptions): Promise<GetBastionSessionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("oci:index/getBastionSession:getBastionSession", {
        "sessionId": args.sessionId,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getBastionSession.
 */
export interface GetBastionSessionArgs {
    sessionId: string;
}

/**
 * A collection of values returned by getBastionSession.
 */
export interface GetBastionSessionResult {
    readonly bastionId: string;
    readonly bastionName: string;
    readonly bastionPublicHostKeyInfo: string;
    readonly bastionUserName: string;
    readonly displayName: string;
    readonly id: string;
    readonly keyDetails: outputs.GetBastionSessionKeyDetail[];
    readonly keyType: string;
    readonly lifecycleDetails: string;
    readonly sessionId: string;
    readonly sessionTtlInSeconds: number;
    readonly sshMetadata: {[key: string]: string};
    readonly state: string;
    readonly targetResourceDetails: outputs.GetBastionSessionTargetResourceDetail[];
    readonly timeCreated: string;
    readonly timeUpdated: string;
}
export function getBastionSessionOutput(args: GetBastionSessionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetBastionSessionResult> {
    return pulumi.output(args).apply((a: any) => getBastionSession(a, opts))
}

/**
 * A collection of arguments for invoking getBastionSession.
 */
export interface GetBastionSessionOutputArgs {
    sessionId: pulumi.Input<string>;
}
