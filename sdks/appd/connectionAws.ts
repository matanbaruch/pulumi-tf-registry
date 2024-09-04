// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ConnectionAws extends pulumi.CustomResource {
    /**
     * Get an existing ConnectionAws resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ConnectionAwsState, opts?: pulumi.CustomResourceOptions): ConnectionAws {
        return new ConnectionAws(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'appd:index/connectionAws:ConnectionAws';

    /**
     * Returns true if the given object is an instance of ConnectionAws.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectionAws {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectionAws.__pulumiType;
    }

    /**
     * The Configuration Details for the Connection
     */
    public readonly configurationDetails!: pulumi.Output<outputs.ConnectionAwsConfigurationDetails | undefined>;
    /**
     * Whether default services are present in configuration details
     */
    public /*out*/ readonly configurationDetailsServiceDefault!: pulumi.Output<boolean>;
    /**
     * The Configuration ID of the Connection
     */
    public /*out*/ readonly configurationId!: pulumi.Output<string>;
    public readonly connectionDetails!: pulumi.Output<outputs.ConnectionAwsConnectionDetails>;
    /**
     * The RFC3339 timestamp
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Description for this connection or configuration
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of the connection or configuration
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Connection state. Value which can be given: [ "ACTIVE", "INACTIVE" ]. All possible values: [ "INACTIVE", "ACTIVE",
     * "PENDING CONFIGURATION", "INCOMPLETE", "CONFIGURED", "INSUFFICIENT LICENSE", "ERROR", "WARNING", "CRITICAL" ]
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * Connection state message
     */
    public /*out*/ readonly stateMessage!: pulumi.Output<string>;
    /**
     * The RFC3339 timestamp
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a ConnectionAws resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectionAwsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ConnectionAwsArgs | ConnectionAwsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ConnectionAwsState | undefined;
            resourceInputs["configurationDetails"] = state ? state.configurationDetails : undefined;
            resourceInputs["configurationDetailsServiceDefault"] = state ? state.configurationDetailsServiceDefault : undefined;
            resourceInputs["configurationId"] = state ? state.configurationId : undefined;
            resourceInputs["connectionDetails"] = state ? state.connectionDetails : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["stateMessage"] = state ? state.stateMessage : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
        } else {
            const args = argsOrState as ConnectionAwsArgs | undefined;
            if ((!args || args.connectionDetails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionDetails'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["configurationDetails"] = args ? args.configurationDetails : undefined;
            resourceInputs["connectionDetails"] = args ? args.connectionDetails : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["configurationDetailsServiceDefault"] = undefined /*out*/;
            resourceInputs["configurationId"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["stateMessage"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConnectionAws.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ConnectionAws resources.
 */
export interface ConnectionAwsState {
    /**
     * The Configuration Details for the Connection
     */
    configurationDetails?: pulumi.Input<inputs.ConnectionAwsConfigurationDetails>;
    /**
     * Whether default services are present in configuration details
     */
    configurationDetailsServiceDefault?: pulumi.Input<boolean>;
    /**
     * The Configuration ID of the Connection
     */
    configurationId?: pulumi.Input<string>;
    connectionDetails?: pulumi.Input<inputs.ConnectionAwsConnectionDetails>;
    /**
     * The RFC3339 timestamp
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Description for this connection or configuration
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the connection or configuration
     */
    displayName?: pulumi.Input<string>;
    /**
     * Connection state. Value which can be given: [ "ACTIVE", "INACTIVE" ]. All possible values: [ "INACTIVE", "ACTIVE",
     * "PENDING CONFIGURATION", "INCOMPLETE", "CONFIGURED", "INSUFFICIENT LICENSE", "ERROR", "WARNING", "CRITICAL" ]
     */
    state?: pulumi.Input<string>;
    /**
     * Connection state message
     */
    stateMessage?: pulumi.Input<string>;
    /**
     * The RFC3339 timestamp
     */
    updatedAt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ConnectionAws resource.
 */
export interface ConnectionAwsArgs {
    /**
     * The Configuration Details for the Connection
     */
    configurationDetails?: pulumi.Input<inputs.ConnectionAwsConfigurationDetails>;
    connectionDetails: pulumi.Input<inputs.ConnectionAwsConnectionDetails>;
    /**
     * Description for this connection or configuration
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the connection or configuration
     */
    displayName: pulumi.Input<string>;
    /**
     * Connection state. Value which can be given: [ "ACTIVE", "INACTIVE" ]. All possible values: [ "INACTIVE", "ACTIVE",
     * "PENDING CONFIGURATION", "INCOMPLETE", "CONFIGURED", "INSUFFICIENT LICENSE", "ERROR", "WARNING", "CRITICAL" ]
     */
    state?: pulumi.Input<string>;
}
