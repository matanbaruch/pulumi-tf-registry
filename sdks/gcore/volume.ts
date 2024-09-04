// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumeState, opts?: pulumi.CustomResourceOptions): Volume {
        return new Volume(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gcore:index/volume:Volume';

    /**
     * Returns true if the given object is an instance of Volume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Volume {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Volume.__pulumiType;
    }

    /**
     * Mandatory if volume is created from image
     */
    public readonly imageId!: pulumi.Output<string | undefined>;
    public readonly lastUpdated!: pulumi.Output<string>;
    public readonly metadataMap!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly metadataReadOnlies!: pulumi.Output<outputs.VolumeMetadataReadOnly[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly projectId!: pulumi.Output<number | undefined>;
    public readonly projectName!: pulumi.Output<string | undefined>;
    public readonly regionId!: pulumi.Output<number | undefined>;
    public readonly regionName!: pulumi.Output<string | undefined>;
    public readonly size!: pulumi.Output<number | undefined>;
    /**
     * Mandatory if volume is created from a snapshot
     */
    public readonly snapshotId!: pulumi.Output<string | undefined>;
    /**
     * Available value is 'standard', 'ssd_hiiops', 'cold', 'ultra'. Defaults to standard
     */
    public readonly typeName!: pulumi.Output<string | undefined>;

    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VolumeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VolumeArgs | VolumeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VolumeState | undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["lastUpdated"] = state ? state.lastUpdated : undefined;
            resourceInputs["metadataMap"] = state ? state.metadataMap : undefined;
            resourceInputs["metadataReadOnlies"] = state ? state.metadataReadOnlies : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["projectName"] = state ? state.projectName : undefined;
            resourceInputs["regionId"] = state ? state.regionId : undefined;
            resourceInputs["regionName"] = state ? state.regionName : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["snapshotId"] = state ? state.snapshotId : undefined;
            resourceInputs["typeName"] = state ? state.typeName : undefined;
        } else {
            const args = argsOrState as VolumeArgs | undefined;
            resourceInputs["imageId"] = args ? args.imageId : undefined;
            resourceInputs["lastUpdated"] = args ? args.lastUpdated : undefined;
            resourceInputs["metadataMap"] = args ? args.metadataMap : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["regionId"] = args ? args.regionId : undefined;
            resourceInputs["regionName"] = args ? args.regionName : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["snapshotId"] = args ? args.snapshotId : undefined;
            resourceInputs["typeName"] = args ? args.typeName : undefined;
            resourceInputs["metadataReadOnlies"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Volume.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Volume resources.
 */
export interface VolumeState {
    /**
     * Mandatory if volume is created from image
     */
    imageId?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<string>;
    metadataMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    metadataReadOnlies?: pulumi.Input<pulumi.Input<inputs.VolumeMetadataReadOnly>[]>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
    size?: pulumi.Input<number>;
    /**
     * Mandatory if volume is created from a snapshot
     */
    snapshotId?: pulumi.Input<string>;
    /**
     * Available value is 'standard', 'ssd_hiiops', 'cold', 'ultra'. Defaults to standard
     */
    typeName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    /**
     * Mandatory if volume is created from image
     */
    imageId?: pulumi.Input<string>;
    lastUpdated?: pulumi.Input<string>;
    metadataMap?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    projectId?: pulumi.Input<number>;
    projectName?: pulumi.Input<string>;
    regionId?: pulumi.Input<number>;
    regionName?: pulumi.Input<string>;
    size?: pulumi.Input<number>;
    /**
     * Mandatory if volume is created from a snapshot
     */
    snapshotId?: pulumi.Input<string>;
    /**
     * Available value is 'standard', 'ssd_hiiops', 'cold', 'ultra'. Defaults to standard
     */
    typeName?: pulumi.Input<string>;
}
