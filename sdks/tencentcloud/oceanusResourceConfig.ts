// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OceanusResourceConfig extends pulumi.CustomResource {
    /**
     * Get an existing OceanusResourceConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OceanusResourceConfigState, opts?: pulumi.CustomResourceOptions): OceanusResourceConfig {
        return new OceanusResourceConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/oceanusResourceConfig:OceanusResourceConfig';

    /**
     * Returns true if the given object is an instance of OceanusResourceConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OceanusResourceConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OceanusResourceConfig.__pulumiType;
    }

    /**
     * Resource description.
     */
    public readonly remark!: pulumi.Output<string | undefined>;
    /**
     * Resource ID.
     */
    public readonly resourceId!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly resourceLoc!: pulumi.Output<outputs.OceanusResourceConfigResourceLoc>;
    /**
     * Resource Config Version.
     */
    public /*out*/ readonly version!: pulumi.Output<number>;
    /**
     * Workspace SerialId.
     */
    public readonly workSpaceId!: pulumi.Output<string | undefined>;

    /**
     * Create a OceanusResourceConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OceanusResourceConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OceanusResourceConfigArgs | OceanusResourceConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OceanusResourceConfigState | undefined;
            resourceInputs["remark"] = state ? state.remark : undefined;
            resourceInputs["resourceId"] = state ? state.resourceId : undefined;
            resourceInputs["resourceLoc"] = state ? state.resourceLoc : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
            resourceInputs["workSpaceId"] = state ? state.workSpaceId : undefined;
        } else {
            const args = argsOrState as OceanusResourceConfigArgs | undefined;
            if ((!args || args.resourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceId'");
            }
            if ((!args || args.resourceLoc === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceLoc'");
            }
            resourceInputs["remark"] = args ? args.remark : undefined;
            resourceInputs["resourceId"] = args ? args.resourceId : undefined;
            resourceInputs["resourceLoc"] = args ? args.resourceLoc : undefined;
            resourceInputs["workSpaceId"] = args ? args.workSpaceId : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OceanusResourceConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OceanusResourceConfig resources.
 */
export interface OceanusResourceConfigState {
    /**
     * Resource description.
     */
    remark?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    resourceId?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    resourceLoc?: pulumi.Input<inputs.OceanusResourceConfigResourceLoc>;
    /**
     * Resource Config Version.
     */
    version?: pulumi.Input<number>;
    /**
     * Workspace SerialId.
     */
    workSpaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OceanusResourceConfig resource.
 */
export interface OceanusResourceConfigArgs {
    /**
     * Resource description.
     */
    remark?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    resourceId: pulumi.Input<string>;
    /**
     * Resource location.
     */
    resourceLoc: pulumi.Input<inputs.OceanusResourceConfigResourceLoc>;
    /**
     * Workspace SerialId.
     */
    workSpaceId?: pulumi.Input<string>;
}
