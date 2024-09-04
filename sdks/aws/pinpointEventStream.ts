// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PinpointEventStream extends pulumi.CustomResource {
    /**
     * Get an existing PinpointEventStream resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PinpointEventStreamState, opts?: pulumi.CustomResourceOptions): PinpointEventStream {
        return new PinpointEventStream(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/pinpointEventStream:PinpointEventStream';

    /**
     * Returns true if the given object is an instance of PinpointEventStream.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PinpointEventStream {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PinpointEventStream.__pulumiType;
    }

    public readonly applicationId!: pulumi.Output<string>;
    public readonly destinationStreamArn!: pulumi.Output<string>;
    public readonly roleArn!: pulumi.Output<string>;

    /**
     * Create a PinpointEventStream resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PinpointEventStreamArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PinpointEventStreamArgs | PinpointEventStreamState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PinpointEventStreamState | undefined;
            resourceInputs["applicationId"] = state ? state.applicationId : undefined;
            resourceInputs["destinationStreamArn"] = state ? state.destinationStreamArn : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
        } else {
            const args = argsOrState as PinpointEventStreamArgs | undefined;
            if ((!args || args.applicationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationId'");
            }
            if ((!args || args.destinationStreamArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'destinationStreamArn'");
            }
            if ((!args || args.roleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleArn'");
            }
            resourceInputs["applicationId"] = args ? args.applicationId : undefined;
            resourceInputs["destinationStreamArn"] = args ? args.destinationStreamArn : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PinpointEventStream.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PinpointEventStream resources.
 */
export interface PinpointEventStreamState {
    applicationId?: pulumi.Input<string>;
    destinationStreamArn?: pulumi.Input<string>;
    roleArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PinpointEventStream resource.
 */
export interface PinpointEventStreamArgs {
    applicationId: pulumi.Input<string>;
    destinationStreamArn: pulumi.Input<string>;
    roleArn: pulumi.Input<string>;
}
