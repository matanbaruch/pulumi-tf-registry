// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getKubernetesServiceAccountToken(args: GetKubernetesServiceAccountTokenArgs, opts?: pulumi.InvokeOptions): Promise<GetKubernetesServiceAccountTokenResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("vault:index/getKubernetesServiceAccountToken:getKubernetesServiceAccountToken", {
        "backend": args.backend,
        "clusterRoleBinding": args.clusterRoleBinding,
        "id": args.id,
        "kubernetesNamespace": args.kubernetesNamespace,
        "namespace": args.namespace,
        "role": args.role,
        "ttl": args.ttl,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKubernetesServiceAccountToken.
 */
export interface GetKubernetesServiceAccountTokenArgs {
    backend: string;
    clusterRoleBinding?: boolean;
    id?: string;
    kubernetesNamespace: string;
    namespace?: string;
    role: string;
    ttl?: string;
}

/**
 * A collection of values returned by getKubernetesServiceAccountToken.
 */
export interface GetKubernetesServiceAccountTokenResult {
    readonly backend: string;
    readonly clusterRoleBinding?: boolean;
    readonly id: string;
    readonly kubernetesNamespace: string;
    readonly leaseDuration: number;
    readonly leaseId: string;
    readonly leaseRenewable: boolean;
    readonly namespace?: string;
    readonly role: string;
    readonly serviceAccountName: string;
    readonly serviceAccountNamespace: string;
    readonly serviceAccountToken: string;
    readonly ttl?: string;
}
export function getKubernetesServiceAccountTokenOutput(args: GetKubernetesServiceAccountTokenOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKubernetesServiceAccountTokenResult> {
    return pulumi.output(args).apply((a: any) => getKubernetesServiceAccountToken(a, opts))
}

/**
 * A collection of arguments for invoking getKubernetesServiceAccountToken.
 */
export interface GetKubernetesServiceAccountTokenOutputArgs {
    backend: pulumi.Input<string>;
    clusterRoleBinding?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    kubernetesNamespace: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    role: pulumi.Input<string>;
    ttl?: pulumi.Input<string>;
}
