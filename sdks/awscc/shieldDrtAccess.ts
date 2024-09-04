// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ShieldDrtAccess extends pulumi.CustomResource {
    /**
     * Get an existing ShieldDrtAccess resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ShieldDrtAccessState, opts?: pulumi.CustomResourceOptions): ShieldDrtAccess {
        return new ShieldDrtAccess(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/shieldDrtAccess:ShieldDrtAccess';

    /**
     * Returns true if the given object is an instance of ShieldDrtAccess.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ShieldDrtAccess {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ShieldDrtAccess.__pulumiType;
    }

    public /*out*/ readonly accountId!: pulumi.Output<string>;
    /**
     * Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as
     * Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10
     * Amazon S3 buckets with your subscription.
     */
    public readonly logBucketLists!: pulumi.Output<string[]>;
    /**
     * Authorizes the Shield Response Team (SRT) using the specified role, to access your AWS account to assist with DDoS
     * attack mitigation during potential attacks. This enables the SRT to inspect your AWS WAF configuration and create or
     * update AWS WAF rules and web ACLs.
     */
    public readonly roleArn!: pulumi.Output<string>;

    /**
     * Create a ShieldDrtAccess resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShieldDrtAccessArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ShieldDrtAccessArgs | ShieldDrtAccessState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ShieldDrtAccessState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["logBucketLists"] = state ? state.logBucketLists : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
        } else {
            const args = argsOrState as ShieldDrtAccessArgs | undefined;
            if ((!args || args.roleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleArn'");
            }
            resourceInputs["logBucketLists"] = args ? args.logBucketLists : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["accountId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ShieldDrtAccess.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ShieldDrtAccess resources.
 */
export interface ShieldDrtAccessState {
    accountId?: pulumi.Input<string>;
    /**
     * Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as
     * Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10
     * Amazon S3 buckets with your subscription.
     */
    logBucketLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Authorizes the Shield Response Team (SRT) using the specified role, to access your AWS account to assist with DDoS
     * attack mitigation during potential attacks. This enables the SRT to inspect your AWS WAF configuration and create or
     * update AWS WAF rules and web ACLs.
     */
    roleArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ShieldDrtAccess resource.
 */
export interface ShieldDrtAccessArgs {
    /**
     * Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as
     * Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10
     * Amazon S3 buckets with your subscription.
     */
    logBucketLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Authorizes the Shield Response Team (SRT) using the specified role, to access your AWS account to assist with DDoS
     * attack mitigation during potential attacks. This enables the SRT to inspect your AWS WAF configuration and create or
     * update AWS WAF rules and web ACLs.
     */
    roleArn: pulumi.Input<string>;
}
