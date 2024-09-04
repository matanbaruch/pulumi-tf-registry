// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SesEventDestination extends pulumi.CustomResource {
    /**
     * Get an existing SesEventDestination resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SesEventDestinationState, opts?: pulumi.CustomResourceOptions): SesEventDestination {
        return new SesEventDestination(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/sesEventDestination:SesEventDestination';

    /**
     * Returns true if the given object is an instance of SesEventDestination.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SesEventDestination {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SesEventDestination.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly cloudwatchDestinations!: pulumi.Output<outputs.SesEventDestinationCloudwatchDestination[] | undefined>;
    public readonly configurationSetName!: pulumi.Output<string>;
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly kinesisDestination!: pulumi.Output<outputs.SesEventDestinationKinesisDestination | undefined>;
    public readonly matchingTypes!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly snsDestination!: pulumi.Output<outputs.SesEventDestinationSnsDestination | undefined>;

    /**
     * Create a SesEventDestination resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SesEventDestinationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SesEventDestinationArgs | SesEventDestinationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SesEventDestinationState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["cloudwatchDestinations"] = state ? state.cloudwatchDestinations : undefined;
            resourceInputs["configurationSetName"] = state ? state.configurationSetName : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["kinesisDestination"] = state ? state.kinesisDestination : undefined;
            resourceInputs["matchingTypes"] = state ? state.matchingTypes : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["snsDestination"] = state ? state.snsDestination : undefined;
        } else {
            const args = argsOrState as SesEventDestinationArgs | undefined;
            if ((!args || args.configurationSetName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'configurationSetName'");
            }
            if ((!args || args.matchingTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'matchingTypes'");
            }
            resourceInputs["cloudwatchDestinations"] = args ? args.cloudwatchDestinations : undefined;
            resourceInputs["configurationSetName"] = args ? args.configurationSetName : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["kinesisDestination"] = args ? args.kinesisDestination : undefined;
            resourceInputs["matchingTypes"] = args ? args.matchingTypes : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["snsDestination"] = args ? args.snsDestination : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SesEventDestination.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SesEventDestination resources.
 */
export interface SesEventDestinationState {
    arn?: pulumi.Input<string>;
    cloudwatchDestinations?: pulumi.Input<pulumi.Input<inputs.SesEventDestinationCloudwatchDestination>[]>;
    configurationSetName?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    kinesisDestination?: pulumi.Input<inputs.SesEventDestinationKinesisDestination>;
    matchingTypes?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    snsDestination?: pulumi.Input<inputs.SesEventDestinationSnsDestination>;
}

/**
 * The set of arguments for constructing a SesEventDestination resource.
 */
export interface SesEventDestinationArgs {
    cloudwatchDestinations?: pulumi.Input<pulumi.Input<inputs.SesEventDestinationCloudwatchDestination>[]>;
    configurationSetName: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    kinesisDestination?: pulumi.Input<inputs.SesEventDestinationKinesisDestination>;
    matchingTypes: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    snsDestination?: pulumi.Input<inputs.SesEventDestinationSnsDestination>;
}
