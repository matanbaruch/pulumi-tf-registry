// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ElasticSanVolume extends pulumi.CustomResource {
    /**
     * Get an existing ElasticSanVolume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ElasticSanVolumeState, opts?: pulumi.CustomResourceOptions): ElasticSanVolume {
        return new ElasticSanVolume(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/elasticSanVolume:ElasticSanVolume';

    /**
     * Returns true if the given object is an instance of ElasticSanVolume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ElasticSanVolume {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ElasticSanVolume.__pulumiType;
    }

    public readonly createSource!: pulumi.Output<outputs.ElasticSanVolumeCreateSource | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly sizeInGib!: pulumi.Output<number>;
    public /*out*/ readonly targetIqn!: pulumi.Output<string>;
    public /*out*/ readonly targetPortalHostname!: pulumi.Output<string>;
    public /*out*/ readonly targetPortalPort!: pulumi.Output<number>;
    public readonly timeouts!: pulumi.Output<outputs.ElasticSanVolumeTimeouts | undefined>;
    public readonly volumeGroupId!: pulumi.Output<string>;
    public /*out*/ readonly volumeId!: pulumi.Output<string>;

    /**
     * Create a ElasticSanVolume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ElasticSanVolumeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ElasticSanVolumeArgs | ElasticSanVolumeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ElasticSanVolumeState | undefined;
            resourceInputs["createSource"] = state ? state.createSource : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sizeInGib"] = state ? state.sizeInGib : undefined;
            resourceInputs["targetIqn"] = state ? state.targetIqn : undefined;
            resourceInputs["targetPortalHostname"] = state ? state.targetPortalHostname : undefined;
            resourceInputs["targetPortalPort"] = state ? state.targetPortalPort : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["volumeGroupId"] = state ? state.volumeGroupId : undefined;
            resourceInputs["volumeId"] = state ? state.volumeId : undefined;
        } else {
            const args = argsOrState as ElasticSanVolumeArgs | undefined;
            if ((!args || args.sizeInGib === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sizeInGib'");
            }
            if ((!args || args.volumeGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volumeGroupId'");
            }
            resourceInputs["createSource"] = args ? args.createSource : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sizeInGib"] = args ? args.sizeInGib : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["volumeGroupId"] = args ? args.volumeGroupId : undefined;
            resourceInputs["targetIqn"] = undefined /*out*/;
            resourceInputs["targetPortalHostname"] = undefined /*out*/;
            resourceInputs["targetPortalPort"] = undefined /*out*/;
            resourceInputs["volumeId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ElasticSanVolume.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ElasticSanVolume resources.
 */
export interface ElasticSanVolumeState {
    createSource?: pulumi.Input<inputs.ElasticSanVolumeCreateSource>;
    name?: pulumi.Input<string>;
    sizeInGib?: pulumi.Input<number>;
    targetIqn?: pulumi.Input<string>;
    targetPortalHostname?: pulumi.Input<string>;
    targetPortalPort?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.ElasticSanVolumeTimeouts>;
    volumeGroupId?: pulumi.Input<string>;
    volumeId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ElasticSanVolume resource.
 */
export interface ElasticSanVolumeArgs {
    createSource?: pulumi.Input<inputs.ElasticSanVolumeCreateSource>;
    name?: pulumi.Input<string>;
    sizeInGib: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.ElasticSanVolumeTimeouts>;
    volumeGroupId: pulumi.Input<string>;
}
