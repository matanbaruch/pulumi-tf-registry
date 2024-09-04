// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudwatchLogStream extends pulumi.CustomResource {
    /**
     * Get an existing CloudwatchLogStream resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudwatchLogStreamState, opts?: pulumi.CustomResourceOptions): CloudwatchLogStream {
        return new CloudwatchLogStream(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/cloudwatchLogStream:CloudwatchLogStream';

    /**
     * Returns true if the given object is an instance of CloudwatchLogStream.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudwatchLogStream {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudwatchLogStream.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly logGroupName!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a CloudwatchLogStream resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudwatchLogStreamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudwatchLogStreamArgs | CloudwatchLogStreamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudwatchLogStreamState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["logGroupName"] = state ? state.logGroupName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as CloudwatchLogStreamArgs | undefined;
            if ((!args || args.logGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'logGroupName'");
            }
            resourceInputs["logGroupName"] = args ? args.logGroupName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudwatchLogStream.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudwatchLogStream resources.
 */
export interface CloudwatchLogStreamState {
    arn?: pulumi.Input<string>;
    logGroupName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudwatchLogStream resource.
 */
export interface CloudwatchLogStreamArgs {
    logGroupName: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
