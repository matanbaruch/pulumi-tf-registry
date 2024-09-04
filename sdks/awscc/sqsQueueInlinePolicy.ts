// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SqsQueueInlinePolicy extends pulumi.CustomResource {
    /**
     * Get an existing SqsQueueInlinePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SqsQueueInlinePolicyState, opts?: pulumi.CustomResourceOptions): SqsQueueInlinePolicy {
        return new SqsQueueInlinePolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/sqsQueueInlinePolicy:SqsQueueInlinePolicy';

    /**
     * Returns true if the given object is an instance of SqsQueueInlinePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SqsQueueInlinePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SqsQueueInlinePolicy.__pulumiType;
    }

    /**
     * A policy document that contains permissions to add to the specified SQS queue
     */
    public readonly policyDocument!: pulumi.Output<string>;
    /**
     * The URL of the SQS queue.
     */
    public readonly queue!: pulumi.Output<string>;

    /**
     * Create a SqsQueueInlinePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SqsQueueInlinePolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SqsQueueInlinePolicyArgs | SqsQueueInlinePolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SqsQueueInlinePolicyState | undefined;
            resourceInputs["policyDocument"] = state ? state.policyDocument : undefined;
            resourceInputs["queue"] = state ? state.queue : undefined;
        } else {
            const args = argsOrState as SqsQueueInlinePolicyArgs | undefined;
            if ((!args || args.policyDocument === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policyDocument'");
            }
            if ((!args || args.queue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queue'");
            }
            resourceInputs["policyDocument"] = args ? args.policyDocument : undefined;
            resourceInputs["queue"] = args ? args.queue : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SqsQueueInlinePolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SqsQueueInlinePolicy resources.
 */
export interface SqsQueueInlinePolicyState {
    /**
     * A policy document that contains permissions to add to the specified SQS queue
     */
    policyDocument?: pulumi.Input<string>;
    /**
     * The URL of the SQS queue.
     */
    queue?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SqsQueueInlinePolicy resource.
 */
export interface SqsQueueInlinePolicyArgs {
    /**
     * A policy document that contains permissions to add to the specified SQS queue
     */
    policyDocument: pulumi.Input<string>;
    /**
     * The URL of the SQS queue.
     */
    queue: pulumi.Input<string>;
}
