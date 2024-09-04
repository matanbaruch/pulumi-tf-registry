// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatabaseManagementExternalAsm extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseManagementExternalAsm resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseManagementExternalAsmState, opts?: pulumi.CustomResourceOptions): DatabaseManagementExternalAsm {
        return new DatabaseManagementExternalAsm(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/databaseManagementExternalAsm:DatabaseManagementExternalAsm';

    /**
     * Returns true if the given object is an instance of DatabaseManagementExternalAsm.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseManagementExternalAsm {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseManagementExternalAsm.__pulumiType;
    }

    public /*out*/ readonly additionalDetails!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly compartmentId!: pulumi.Output<string>;
    public /*out*/ readonly componentName!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly displayName!: pulumi.Output<string>;
    public readonly externalAsmId!: pulumi.Output<string>;
    public readonly externalConnectorId!: pulumi.Output<string>;
    public /*out*/ readonly externalDbSystemId!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly gridHome!: pulumi.Output<string>;
    public /*out*/ readonly isCluster!: pulumi.Output<boolean>;
    public /*out*/ readonly isFlexEnabled!: pulumi.Output<boolean>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public /*out*/ readonly servicedDatabases!: pulumi.Output<outputs.DatabaseManagementExternalAsmServicedDatabase[]>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatabaseManagementExternalAsmTimeouts | undefined>;
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a DatabaseManagementExternalAsm resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseManagementExternalAsmArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseManagementExternalAsmArgs | DatabaseManagementExternalAsmState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatabaseManagementExternalAsmState | undefined;
            resourceInputs["additionalDetails"] = state ? state.additionalDetails : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["componentName"] = state ? state.componentName : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["externalAsmId"] = state ? state.externalAsmId : undefined;
            resourceInputs["externalConnectorId"] = state ? state.externalConnectorId : undefined;
            resourceInputs["externalDbSystemId"] = state ? state.externalDbSystemId : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["gridHome"] = state ? state.gridHome : undefined;
            resourceInputs["isCluster"] = state ? state.isCluster : undefined;
            resourceInputs["isFlexEnabled"] = state ? state.isFlexEnabled : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["servicedDatabases"] = state ? state.servicedDatabases : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as DatabaseManagementExternalAsmArgs | undefined;
            if ((!args || args.externalAsmId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'externalAsmId'");
            }
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["externalAsmId"] = args ? args.externalAsmId : undefined;
            resourceInputs["externalConnectorId"] = args ? args.externalConnectorId : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["additionalDetails"] = undefined /*out*/;
            resourceInputs["compartmentId"] = undefined /*out*/;
            resourceInputs["componentName"] = undefined /*out*/;
            resourceInputs["displayName"] = undefined /*out*/;
            resourceInputs["externalDbSystemId"] = undefined /*out*/;
            resourceInputs["gridHome"] = undefined /*out*/;
            resourceInputs["isCluster"] = undefined /*out*/;
            resourceInputs["isFlexEnabled"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["servicedDatabases"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatabaseManagementExternalAsm.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatabaseManagementExternalAsm resources.
 */
export interface DatabaseManagementExternalAsmState {
    additionalDetails?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    compartmentId?: pulumi.Input<string>;
    componentName?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    displayName?: pulumi.Input<string>;
    externalAsmId?: pulumi.Input<string>;
    externalConnectorId?: pulumi.Input<string>;
    externalDbSystemId?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    gridHome?: pulumi.Input<string>;
    isCluster?: pulumi.Input<boolean>;
    isFlexEnabled?: pulumi.Input<boolean>;
    lifecycleDetails?: pulumi.Input<string>;
    servicedDatabases?: pulumi.Input<pulumi.Input<inputs.DatabaseManagementExternalAsmServicedDatabase>[]>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatabaseManagementExternalAsmTimeouts>;
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatabaseManagementExternalAsm resource.
 */
export interface DatabaseManagementExternalAsmArgs {
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    externalAsmId: pulumi.Input<string>;
    externalConnectorId?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DatabaseManagementExternalAsmTimeouts>;
}
