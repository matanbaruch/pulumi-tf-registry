// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CoreCrossConnect extends pulumi.CustomResource {
    /**
     * Get an existing CoreCrossConnect resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CoreCrossConnectState, opts?: pulumi.CustomResourceOptions): CoreCrossConnect {
        return new CoreCrossConnect(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/coreCrossConnect:CoreCrossConnect';

    /**
     * Returns true if the given object is an instance of CoreCrossConnect.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CoreCrossConnect {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CoreCrossConnect.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly crossConnectGroupId!: pulumi.Output<string>;
    public readonly customerReferenceName!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly farCrossConnectOrCrossConnectGroupId!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public readonly isActive!: pulumi.Output<boolean | undefined>;
    public readonly locationName!: pulumi.Output<string>;
    public readonly macsecProperties!: pulumi.Output<outputs.CoreCrossConnectMacsecProperties | undefined>;
    public readonly nearCrossConnectOrCrossConnectGroupId!: pulumi.Output<string>;
    public /*out*/ readonly ociLogicalDeviceName!: pulumi.Output<string>;
    public /*out*/ readonly ociPhysicalDeviceName!: pulumi.Output<string>;
    public /*out*/ readonly portName!: pulumi.Output<string>;
    public readonly portSpeedShapeName!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CoreCrossConnectTimeouts | undefined>;

    /**
     * Create a CoreCrossConnect resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CoreCrossConnectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CoreCrossConnectArgs | CoreCrossConnectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CoreCrossConnectState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["crossConnectGroupId"] = state ? state.crossConnectGroupId : undefined;
            resourceInputs["customerReferenceName"] = state ? state.customerReferenceName : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["farCrossConnectOrCrossConnectGroupId"] = state ? state.farCrossConnectOrCrossConnectGroupId : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["isActive"] = state ? state.isActive : undefined;
            resourceInputs["locationName"] = state ? state.locationName : undefined;
            resourceInputs["macsecProperties"] = state ? state.macsecProperties : undefined;
            resourceInputs["nearCrossConnectOrCrossConnectGroupId"] = state ? state.nearCrossConnectOrCrossConnectGroupId : undefined;
            resourceInputs["ociLogicalDeviceName"] = state ? state.ociLogicalDeviceName : undefined;
            resourceInputs["ociPhysicalDeviceName"] = state ? state.ociPhysicalDeviceName : undefined;
            resourceInputs["portName"] = state ? state.portName : undefined;
            resourceInputs["portSpeedShapeName"] = state ? state.portSpeedShapeName : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CoreCrossConnectArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.locationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'locationName'");
            }
            if ((!args || args.portSpeedShapeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'portSpeedShapeName'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["crossConnectGroupId"] = args ? args.crossConnectGroupId : undefined;
            resourceInputs["customerReferenceName"] = args ? args.customerReferenceName : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["farCrossConnectOrCrossConnectGroupId"] = args ? args.farCrossConnectOrCrossConnectGroupId : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["isActive"] = args ? args.isActive : undefined;
            resourceInputs["locationName"] = args ? args.locationName : undefined;
            resourceInputs["macsecProperties"] = args ? args.macsecProperties : undefined;
            resourceInputs["nearCrossConnectOrCrossConnectGroupId"] = args ? args.nearCrossConnectOrCrossConnectGroupId : undefined;
            resourceInputs["portSpeedShapeName"] = args ? args.portSpeedShapeName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["ociLogicalDeviceName"] = undefined /*out*/;
            resourceInputs["ociPhysicalDeviceName"] = undefined /*out*/;
            resourceInputs["portName"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CoreCrossConnect.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CoreCrossConnect resources.
 */
export interface CoreCrossConnectState {
    compartmentId?: pulumi.Input<string>;
    crossConnectGroupId?: pulumi.Input<string>;
    customerReferenceName?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    farCrossConnectOrCrossConnectGroupId?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isActive?: pulumi.Input<boolean>;
    locationName?: pulumi.Input<string>;
    macsecProperties?: pulumi.Input<inputs.CoreCrossConnectMacsecProperties>;
    nearCrossConnectOrCrossConnectGroupId?: pulumi.Input<string>;
    ociLogicalDeviceName?: pulumi.Input<string>;
    ociPhysicalDeviceName?: pulumi.Input<string>;
    portName?: pulumi.Input<string>;
    portSpeedShapeName?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreCrossConnectTimeouts>;
}

/**
 * The set of arguments for constructing a CoreCrossConnect resource.
 */
export interface CoreCrossConnectArgs {
    compartmentId: pulumi.Input<string>;
    crossConnectGroupId?: pulumi.Input<string>;
    customerReferenceName?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    farCrossConnectOrCrossConnectGroupId?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isActive?: pulumi.Input<boolean>;
    locationName: pulumi.Input<string>;
    macsecProperties?: pulumi.Input<inputs.CoreCrossConnectMacsecProperties>;
    nearCrossConnectOrCrossConnectGroupId?: pulumi.Input<string>;
    portSpeedShapeName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreCrossConnectTimeouts>;
}
