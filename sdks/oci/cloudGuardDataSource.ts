// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudGuardDataSource extends pulumi.CustomResource {
    /**
     * Get an existing CloudGuardDataSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudGuardDataSourceState, opts?: pulumi.CustomResourceOptions): CloudGuardDataSource {
        return new CloudGuardDataSource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/cloudGuardDataSource:CloudGuardDataSource';

    /**
     * Returns true if the given object is an instance of CloudGuardDataSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudGuardDataSource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudGuardDataSource.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly dataSourceDetails!: pulumi.Output<outputs.CloudGuardDataSourceDataSourceDetails | undefined>;
    public /*out*/ readonly dataSourceDetectorMappingInfos!: pulumi.Output<outputs.CloudGuardDataSourceDataSourceDetectorMappingInfo[]>;
    public readonly dataSourceFeedProvider!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly regionStatusDetails!: pulumi.Output<outputs.CloudGuardDataSourceRegionStatusDetail[]>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CloudGuardDataSourceTimeouts | undefined>;

    /**
     * Create a CloudGuardDataSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudGuardDataSourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudGuardDataSourceArgs | CloudGuardDataSourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudGuardDataSourceState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["dataSourceDetails"] = state ? state.dataSourceDetails : undefined;
            resourceInputs["dataSourceDetectorMappingInfos"] = state ? state.dataSourceDetectorMappingInfos : undefined;
            resourceInputs["dataSourceFeedProvider"] = state ? state.dataSourceFeedProvider : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["regionStatusDetails"] = state ? state.regionStatusDetails : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CloudGuardDataSourceArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.dataSourceFeedProvider === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataSourceFeedProvider'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["dataSourceDetails"] = args ? args.dataSourceDetails : undefined;
            resourceInputs["dataSourceFeedProvider"] = args ? args.dataSourceFeedProvider : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["dataSourceDetectorMappingInfos"] = undefined /*out*/;
            resourceInputs["regionStatusDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudGuardDataSource.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudGuardDataSource resources.
 */
export interface CloudGuardDataSourceState {
    compartmentId?: pulumi.Input<string>;
    dataSourceDetails?: pulumi.Input<inputs.CloudGuardDataSourceDataSourceDetails>;
    dataSourceDetectorMappingInfos?: pulumi.Input<pulumi.Input<inputs.CloudGuardDataSourceDataSourceDetectorMappingInfo>[]>;
    dataSourceFeedProvider?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    regionStatusDetails?: pulumi.Input<pulumi.Input<inputs.CloudGuardDataSourceRegionStatusDetail>[]>;
    state?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CloudGuardDataSourceTimeouts>;
}

/**
 * The set of arguments for constructing a CloudGuardDataSource resource.
 */
export interface CloudGuardDataSourceArgs {
    compartmentId: pulumi.Input<string>;
    dataSourceDetails?: pulumi.Input<inputs.CloudGuardDataSourceDataSourceDetails>;
    dataSourceFeedProvider: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CloudGuardDataSourceTimeouts>;
}
