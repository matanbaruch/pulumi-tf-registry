// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CoreDrgAttachmentManagement extends pulumi.CustomResource {
    /**
     * Get an existing CoreDrgAttachmentManagement resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CoreDrgAttachmentManagementState, opts?: pulumi.CustomResourceOptions): CoreDrgAttachmentManagement {
        return new CoreDrgAttachmentManagement(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/coreDrgAttachmentManagement:CoreDrgAttachmentManagement';

    /**
     * Returns true if the given object is an instance of CoreDrgAttachmentManagement.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CoreDrgAttachmentManagement {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CoreDrgAttachmentManagement.__pulumiType;
    }

    public readonly attachmentType!: pulumi.Output<string>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly drgId!: pulumi.Output<string>;
    public readonly drgRouteTableId!: pulumi.Output<string>;
    public readonly exportDrgRouteDistributionId!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly isCrossTenancy!: pulumi.Output<boolean>;
    public readonly networkDetails!: pulumi.Output<outputs.CoreDrgAttachmentManagementNetworkDetails | undefined>;
    public readonly networkId!: pulumi.Output<string | undefined>;
    public readonly removeExportDrgRouteDistributionTrigger!: pulumi.Output<boolean | undefined>;
    public readonly routeTableId!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CoreDrgAttachmentManagementTimeouts | undefined>;
    public readonly vcnId!: pulumi.Output<string>;

    /**
     * Create a CoreDrgAttachmentManagement resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CoreDrgAttachmentManagementArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CoreDrgAttachmentManagementArgs | CoreDrgAttachmentManagementState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CoreDrgAttachmentManagementState | undefined;
            resourceInputs["attachmentType"] = state ? state.attachmentType : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["drgId"] = state ? state.drgId : undefined;
            resourceInputs["drgRouteTableId"] = state ? state.drgRouteTableId : undefined;
            resourceInputs["exportDrgRouteDistributionId"] = state ? state.exportDrgRouteDistributionId : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["isCrossTenancy"] = state ? state.isCrossTenancy : undefined;
            resourceInputs["networkDetails"] = state ? state.networkDetails : undefined;
            resourceInputs["networkId"] = state ? state.networkId : undefined;
            resourceInputs["removeExportDrgRouteDistributionTrigger"] = state ? state.removeExportDrgRouteDistributionTrigger : undefined;
            resourceInputs["routeTableId"] = state ? state.routeTableId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vcnId"] = state ? state.vcnId : undefined;
        } else {
            const args = argsOrState as CoreDrgAttachmentManagementArgs | undefined;
            if ((!args || args.attachmentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attachmentType'");
            }
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.drgId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'drgId'");
            }
            resourceInputs["attachmentType"] = args ? args.attachmentType : undefined;
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["drgId"] = args ? args.drgId : undefined;
            resourceInputs["drgRouteTableId"] = args ? args.drgRouteTableId : undefined;
            resourceInputs["exportDrgRouteDistributionId"] = args ? args.exportDrgRouteDistributionId : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["networkDetails"] = args ? args.networkDetails : undefined;
            resourceInputs["networkId"] = args ? args.networkId : undefined;
            resourceInputs["removeExportDrgRouteDistributionTrigger"] = args ? args.removeExportDrgRouteDistributionTrigger : undefined;
            resourceInputs["routeTableId"] = args ? args.routeTableId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vcnId"] = args ? args.vcnId : undefined;
            resourceInputs["isCrossTenancy"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CoreDrgAttachmentManagement.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CoreDrgAttachmentManagement resources.
 */
export interface CoreDrgAttachmentManagementState {
    attachmentType?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    drgId?: pulumi.Input<string>;
    drgRouteTableId?: pulumi.Input<string>;
    exportDrgRouteDistributionId?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isCrossTenancy?: pulumi.Input<boolean>;
    networkDetails?: pulumi.Input<inputs.CoreDrgAttachmentManagementNetworkDetails>;
    networkId?: pulumi.Input<string>;
    removeExportDrgRouteDistributionTrigger?: pulumi.Input<boolean>;
    routeTableId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreDrgAttachmentManagementTimeouts>;
    vcnId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CoreDrgAttachmentManagement resource.
 */
export interface CoreDrgAttachmentManagementArgs {
    attachmentType: pulumi.Input<string>;
    compartmentId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    drgId: pulumi.Input<string>;
    drgRouteTableId?: pulumi.Input<string>;
    exportDrgRouteDistributionId?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    networkDetails?: pulumi.Input<inputs.CoreDrgAttachmentManagementNetworkDetails>;
    networkId?: pulumi.Input<string>;
    removeExportDrgRouteDistributionTrigger?: pulumi.Input<boolean>;
    routeTableId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CoreDrgAttachmentManagementTimeouts>;
    vcnId?: pulumi.Input<string>;
}
