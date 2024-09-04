// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AwsProvider extends pulumi.CustomResource {
    /**
     * Get an existing AwsProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AwsProviderState, opts?: pulumi.CustomResourceOptions): AwsProvider {
        return new AwsProvider(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vantage:index/awsProvider:AwsProvider';

    /**
     * Returns true if the given object is an instance of AwsProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AwsProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AwsProvider.__pulumiType;
    }

    /**
     * Bucket ARN for where CUR data is being stored.
     */
    public readonly bucketArn!: pulumi.Output<string | undefined>;
    /**
     * ARN to use for cross account access.
     */
    public readonly crossAccountArn!: pulumi.Output<string>;

    /**
     * Create a AwsProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AwsProviderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AwsProviderArgs | AwsProviderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AwsProviderState | undefined;
            resourceInputs["bucketArn"] = state ? state.bucketArn : undefined;
            resourceInputs["crossAccountArn"] = state ? state.crossAccountArn : undefined;
        } else {
            const args = argsOrState as AwsProviderArgs | undefined;
            if ((!args || args.crossAccountArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'crossAccountArn'");
            }
            resourceInputs["bucketArn"] = args ? args.bucketArn : undefined;
            resourceInputs["crossAccountArn"] = args ? args.crossAccountArn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AwsProvider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AwsProvider resources.
 */
export interface AwsProviderState {
    /**
     * Bucket ARN for where CUR data is being stored.
     */
    bucketArn?: pulumi.Input<string>;
    /**
     * ARN to use for cross account access.
     */
    crossAccountArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AwsProvider resource.
 */
export interface AwsProviderArgs {
    /**
     * Bucket ARN for where CUR data is being stored.
     */
    bucketArn?: pulumi.Input<string>;
    /**
     * ARN to use for cross account access.
     */
    crossAccountArn: pulumi.Input<string>;
}
