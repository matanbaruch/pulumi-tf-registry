// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudwatchEventConnection extends pulumi.CustomResource {
    /**
     * Get an existing CloudwatchEventConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudwatchEventConnectionState, opts?: pulumi.CustomResourceOptions): CloudwatchEventConnection {
        return new CloudwatchEventConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/cloudwatchEventConnection:CloudwatchEventConnection';

    /**
     * Returns true if the given object is an instance of CloudwatchEventConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudwatchEventConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudwatchEventConnection.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly authParameters!: pulumi.Output<outputs.CloudwatchEventConnectionAuthParameters>;
    public readonly authorizationType!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly secretArn!: pulumi.Output<string>;

    /**
     * Create a CloudwatchEventConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudwatchEventConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudwatchEventConnectionArgs | CloudwatchEventConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudwatchEventConnectionState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["authParameters"] = state ? state.authParameters : undefined;
            resourceInputs["authorizationType"] = state ? state.authorizationType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["secretArn"] = state ? state.secretArn : undefined;
        } else {
            const args = argsOrState as CloudwatchEventConnectionArgs | undefined;
            if ((!args || args.authParameters === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authParameters'");
            }
            if ((!args || args.authorizationType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authorizationType'");
            }
            resourceInputs["authParameters"] = args ? args.authParameters : undefined;
            resourceInputs["authorizationType"] = args ? args.authorizationType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["secretArn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudwatchEventConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudwatchEventConnection resources.
 */
export interface CloudwatchEventConnectionState {
    arn?: pulumi.Input<string>;
    authParameters?: pulumi.Input<inputs.CloudwatchEventConnectionAuthParameters>;
    authorizationType?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    secretArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudwatchEventConnection resource.
 */
export interface CloudwatchEventConnectionArgs {
    authParameters: pulumi.Input<inputs.CloudwatchEventConnectionAuthParameters>;
    authorizationType: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
