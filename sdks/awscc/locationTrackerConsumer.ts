// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LocationTrackerConsumer extends pulumi.CustomResource {
    /**
     * Get an existing LocationTrackerConsumer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LocationTrackerConsumerState, opts?: pulumi.CustomResourceOptions): LocationTrackerConsumer {
        return new LocationTrackerConsumer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/locationTrackerConsumer:LocationTrackerConsumer';

    /**
     * Returns true if the given object is an instance of LocationTrackerConsumer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LocationTrackerConsumer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LocationTrackerConsumer.__pulumiType;
    }

    public readonly consumerArn!: pulumi.Output<string>;
    public readonly trackerName!: pulumi.Output<string>;

    /**
     * Create a LocationTrackerConsumer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LocationTrackerConsumerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LocationTrackerConsumerArgs | LocationTrackerConsumerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LocationTrackerConsumerState | undefined;
            resourceInputs["consumerArn"] = state ? state.consumerArn : undefined;
            resourceInputs["trackerName"] = state ? state.trackerName : undefined;
        } else {
            const args = argsOrState as LocationTrackerConsumerArgs | undefined;
            if ((!args || args.consumerArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumerArn'");
            }
            if ((!args || args.trackerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trackerName'");
            }
            resourceInputs["consumerArn"] = args ? args.consumerArn : undefined;
            resourceInputs["trackerName"] = args ? args.trackerName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LocationTrackerConsumer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LocationTrackerConsumer resources.
 */
export interface LocationTrackerConsumerState {
    consumerArn?: pulumi.Input<string>;
    trackerName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LocationTrackerConsumer resource.
 */
export interface LocationTrackerConsumerArgs {
    consumerArn: pulumi.Input<string>;
    trackerName: pulumi.Input<string>;
}
