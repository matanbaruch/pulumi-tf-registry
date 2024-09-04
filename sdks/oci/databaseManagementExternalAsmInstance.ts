// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseManagementExternalAsmInstance extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseManagementExternalAsmInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseManagementExternalAsmInstanceState, opts?: pulumi.CustomResourceOptions): DatabaseManagementExternalAsmInstance {
        return new DatabaseManagementExternalAsmInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/databaseManagementExternalAsmInstance:DatabaseManagementExternalAsmInstance';

    /**
     * Returns true if the given object is an instance of DatabaseManagementExternalAsmInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseManagementExternalAsmInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseManagementExternalAsmInstance.__pulumiType;
    }

    public /*out*/ readonly adrHomeDirectory!: pulumi.Output<string>;
    public /*out*/ readonly compartmentId!: pulumi.Output<string>;
    public /*out*/ readonly componentName!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly externalAsmId!: pulumi.Output<string>;
    public readonly externalAsmInstanceId!: pulumi.Output<string>;
    public /*out*/ readonly externalDbNodeId!: pulumi.Output<string>;
    public /*out*/ readonly externalDbSystemId!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseManagementExternalAsmInstanceTimeouts | undefined>;

    /**
     * Create a DatabaseManagementExternalAsmInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseManagementExternalAsmInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseManagementExternalAsmInstanceArgs | DatabaseManagementExternalAsmInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseManagementExternalAsmInstanceState | undefined;
            resourceInputs["adrHomeDirectory"] = state ? state.adrHomeDirectory : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["componentName"] = state ? state.componentName : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["externalAsmId"] = state ? state.externalAsmId : undefined;
            resourceInputs["externalAsmInstanceId"] = state ? state.externalAsmInstanceId : undefined;
            resourceInputs["externalDbNodeId"] = state ? state.externalDbNodeId : undefined;
            resourceInputs["externalDbSystemId"] = state ? state.externalDbSystemId : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["hostName"] = state ? state.hostName : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DatabaseManagementExternalAsmInstanceArgs | undefined;
            if ((!args || args.externalAsmInstanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'externalAsmInstanceId'");
            }
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["externalAsmInstanceId"] = args ? args.externalAsmInstanceId : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["adrHomeDirectory"] = undefined /*out*/;
            resourceInputs["compartmentId"] = undefined /*out*/;
            resourceInputs["componentName"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["externalAsmId"] = undefined /*out*/;
            resourceInputs["externalDbNodeId"] = undefined /*out*/;
            resourceInputs["externalDbSystemId"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabaseManagementExternalAsmInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseManagementExternalAsmInstance resources.
 */
export interface DatabaseManagementExternalAsmInstanceState {
    adrHomeDirectory?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    componentName?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    externalAsmId?: pulumi.Input<string>;
    externalAsmInstanceId?: pulumi.Input<string>;
    externalDbNodeId?: pulumi.Input<string>;
    externalDbSystemId?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    hostName?: pulumi.Input<string>;
    lifecycleDetails?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseManagementExternalAsmInstanceTimeouts>;
}

/**
 * The set of arguments for constructing a DatabaseManagementExternalAsmInstance resource.
 */
export interface DatabaseManagementExternalAsmInstanceArgs {
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    externalAsmInstanceId: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DatabaseManagementExternalAsmInstanceTimeouts>;
}
