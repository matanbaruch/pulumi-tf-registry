// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FinspaceKxVolume extends pulumi.CustomResource {
    /**
     * Get an existing FinspaceKxVolume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FinspaceKxVolumeState, opts?: pulumi.CustomResourceOptions): FinspaceKxVolume {
        return new FinspaceKxVolume(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/finspaceKxVolume:FinspaceKxVolume';

    /**
     * Returns true if the given object is an instance of FinspaceKxVolume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FinspaceKxVolume {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FinspaceKxVolume.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly attachedClusters!: pulumi.Output<outputs.FinspaceKxVolumeAttachedCluster[]>;
    public readonly availabilityZones!: pulumi.Output<string[]>;
    public readonly azMode!: pulumi.Output<string>;
    public /*out*/ readonly createdTimestamp!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly environmentId!: pulumi.Output<string>;
    public /*out*/ readonly lastModifiedTimestamp!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nas1Configurations!: pulumi.Output<outputs.FinspaceKxVolumeNas1Configuration[] | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public /*out*/ readonly statusReason!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.FinspaceKxVolumeTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a FinspaceKxVolume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FinspaceKxVolumeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FinspaceKxVolumeArgs | FinspaceKxVolumeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FinspaceKxVolumeState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["attachedClusters"] = state ? state.attachedClusters : undefined;
            resourceInputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            resourceInputs["azMode"] = state ? state.azMode : undefined;
            resourceInputs["createdTimestamp"] = state ? state.createdTimestamp : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["environmentId"] = state ? state.environmentId : undefined;
            resourceInputs["lastModifiedTimestamp"] = state ? state.lastModifiedTimestamp : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nas1Configurations"] = state ? state.nas1Configurations : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["statusReason"] = state ? state.statusReason : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as FinspaceKxVolumeArgs | undefined;
            if ((!args || args.availabilityZones === undefined) && !opts.urn) {
                throw new Error("Missing required property 'availabilityZones'");
            }
            if ((!args || args.azMode === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azMode'");
            }
            if ((!args || args.environmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentId'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["azMode"] = args ? args.azMode : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environmentId"] = args ? args.environmentId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nas1Configurations"] = args ? args.nas1Configurations : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["attachedClusters"] = undefined /*out*/;
            resourceInputs["createdTimestamp"] = undefined /*out*/;
            resourceInputs["lastModifiedTimestamp"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusReason"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FinspaceKxVolume.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FinspaceKxVolume resources.
 */
export interface FinspaceKxVolumeState {
    arn?: pulumi.Input<string>;
    attachedClusters?: pulumi.Input<pulumi.Input<inputs.FinspaceKxVolumeAttachedCluster>[]>;
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    azMode?: pulumi.Input<string>;
    createdTimestamp?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    environmentId?: pulumi.Input<string>;
    lastModifiedTimestamp?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nas1Configurations?: pulumi.Input<pulumi.Input<inputs.FinspaceKxVolumeNas1Configuration>[]>;
    status?: pulumi.Input<string>;
    statusReason?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.FinspaceKxVolumeTimeouts>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FinspaceKxVolume resource.
 */
export interface FinspaceKxVolumeArgs {
    availabilityZones: pulumi.Input<pulumi.Input<string>[]>;
    azMode: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    environmentId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nas1Configurations?: pulumi.Input<pulumi.Input<inputs.FinspaceKxVolumeNas1Configuration>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.FinspaceKxVolumeTimeouts>;
    type: pulumi.Input<string>;
}
