// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataSafeTargetDatabase extends pulumi.CustomResource {
    /**
     * Get an existing DataSafeTargetDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataSafeTargetDatabaseState, opts?: pulumi.CustomResourceOptions): DataSafeTargetDatabase {
        return new DataSafeTargetDatabase(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/dataSafeTargetDatabase:DataSafeTargetDatabase';

    /**
     * Returns true if the given object is an instance of DataSafeTargetDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataSafeTargetDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataSafeTargetDatabase.__pulumiType;
    }

    public /*out*/ readonly associatedResourceIds!: pulumi.Output<string[]>;
    public readonly compartmentId!: pulumi.Output<string>;
    public readonly connectionOption!: pulumi.Output<outputs.DataSafeTargetDatabaseConnectionOption | undefined>;
    public readonly credentials!: pulumi.Output<outputs.DataSafeTargetDatabaseCredentials | undefined>;
    public readonly databaseDetails!: pulumi.Output<outputs.DataSafeTargetDatabaseDatabaseDetails>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly peerTargetDatabaseDetails!: pulumi.Output<outputs.DataSafeTargetDatabasePeerTargetDatabaseDetail[] | undefined>;
    public /*out*/ readonly peerTargetDatabases!: pulumi.Output<outputs.DataSafeTargetDatabasePeerTargetDatabase[]>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly systemTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DataSafeTargetDatabaseTimeouts | undefined>;
    public readonly tlsConfig!: pulumi.Output<outputs.DataSafeTargetDatabaseTlsConfig | undefined>;

    /**
     * Create a DataSafeTargetDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataSafeTargetDatabaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataSafeTargetDatabaseArgs | DataSafeTargetDatabaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataSafeTargetDatabaseState | undefined;
            resourceInputs["associatedResourceIds"] = state ? state.associatedResourceIds : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["connectionOption"] = state ? state.connectionOption : undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["databaseDetails"] = state ? state.databaseDetails : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["peerTargetDatabaseDetails"] = state ? state.peerTargetDatabaseDetails : undefined;
            resourceInputs["peerTargetDatabases"] = state ? state.peerTargetDatabases : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["systemTags"] = state ? state.systemTags : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["tlsConfig"] = state ? state.tlsConfig : undefined;
        } else {
            const args = argsOrState as DataSafeTargetDatabaseArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.databaseDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'databaseDetails'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["connectionOption"] = args ? args.connectionOption : undefined;
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["databaseDetails"] = args ? args.databaseDetails : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["peerTargetDatabaseDetails"] = args ? args.peerTargetDatabaseDetails : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["tlsConfig"] = args ? args.tlsConfig : undefined;
            resourceInputs["associatedResourceIds"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["peerTargetDatabases"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["systemTags"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataSafeTargetDatabase.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataSafeTargetDatabase resources.
 */
export interface DataSafeTargetDatabaseState {
    associatedResourceIds?: pulumi.Input<pulumi.Input<string>[]>;
    compartmentId?: pulumi.Input<string>;
    connectionOption?: pulumi.Input<inputs.DataSafeTargetDatabaseConnectionOption>;
    credentials?: pulumi.Input<inputs.DataSafeTargetDatabaseCredentials>;
    databaseDetails?: pulumi.Input<inputs.DataSafeTargetDatabaseDatabaseDetails>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    lifecycleDetails?: pulumi.Input<string>;
    peerTargetDatabaseDetails?: pulumi.Input<pulumi.Input<inputs.DataSafeTargetDatabasePeerTargetDatabaseDetail>[]>;
    peerTargetDatabases?: pulumi.Input<pulumi.Input<inputs.DataSafeTargetDatabasePeerTargetDatabase>[]>;
    state?: pulumi.Input<string>;
    systemTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataSafeTargetDatabaseTimeouts>;
    tlsConfig?: pulumi.Input<inputs.DataSafeTargetDatabaseTlsConfig>;
}

/**
 * The set of arguments for constructing a DataSafeTargetDatabase resource.
 */
export interface DataSafeTargetDatabaseArgs {
    compartmentId: pulumi.Input<string>;
    connectionOption?: pulumi.Input<inputs.DataSafeTargetDatabaseConnectionOption>;
    credentials?: pulumi.Input<inputs.DataSafeTargetDatabaseCredentials>;
    databaseDetails: pulumi.Input<inputs.DataSafeTargetDatabaseDatabaseDetails>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    peerTargetDatabaseDetails?: pulumi.Input<pulumi.Input<inputs.DataSafeTargetDatabasePeerTargetDatabaseDetail>[]>;
    timeouts?: pulumi.Input<inputs.DataSafeTargetDatabaseTimeouts>;
    tlsConfig?: pulumi.Input<inputs.DataSafeTargetDatabaseTlsConfig>;
}
