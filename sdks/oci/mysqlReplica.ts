// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MysqlReplica extends pulumi.CustomResource {
    /**
     * Get an existing MysqlReplica resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MysqlReplicaState, opts?: pulumi.CustomResourceOptions): MysqlReplica {
        return new MysqlReplica(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/mysqlReplica:MysqlReplica';

    /**
     * Returns true if the given object is an instance of MysqlReplica.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MysqlReplica {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MysqlReplica.__pulumiType;
    }

    public /*out*/ readonly availabilityDomain!: pulumi.Output<string>;
    public /*out*/ readonly compartmentId!: pulumi.Output<string>;
    public /*out*/ readonly configurationId!: pulumi.Output<string>;
    public readonly dbSystemId!: pulumi.Output<string>;
    public readonly definedTags!: pulumi.Output<{[key: string]: string}>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly faultDomain!: pulumi.Output<string>;
    public readonly freeformTags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly ipAddress!: pulumi.Output<string>;
    public readonly isDeleteProtected!: pulumi.Output<boolean>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public /*out*/ readonly mysqlVersion!: pulumi.Output<string>;
    public /*out*/ readonly port!: pulumi.Output<number>;
    public /*out*/ readonly portX!: pulumi.Output<number>;
    public readonly replicaOverrides!: pulumi.Output<outputs.MysqlReplicaReplicaOverrides | undefined>;
    public /*out*/ readonly secureConnections!: pulumi.Output<outputs.MysqlReplicaSecureConnection[]>;
    public /*out*/ readonly shapeName!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MysqlReplicaTimeouts | undefined>;

    /**
     * Create a MysqlReplica resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MysqlReplicaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MysqlReplicaArgs | MysqlReplicaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MysqlReplicaState | undefined;
            resourceInputs["availabilityDomain"] = state ? state.availabilityDomain : undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["configurationId"] = state ? state.configurationId : undefined;
            resourceInputs["dbSystemId"] = state ? state.dbSystemId : undefined;
            resourceInputs["definedTags"] = state ? state.definedTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["faultDomain"] = state ? state.faultDomain : undefined;
            resourceInputs["freeformTags"] = state ? state.freeformTags : undefined;
            resourceInputs["ipAddress"] = state ? state.ipAddress : undefined;
            resourceInputs["isDeleteProtected"] = state ? state.isDeleteProtected : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["mysqlVersion"] = state ? state.mysqlVersion : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["portX"] = state ? state.portX : undefined;
            resourceInputs["replicaOverrides"] = state ? state.replicaOverrides : undefined;
            resourceInputs["secureConnections"] = state ? state.secureConnections : undefined;
            resourceInputs["shapeName"] = state ? state.shapeName : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MysqlReplicaArgs | undefined;
            if ((!args || args.dbSystemId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dbSystemId'");
            }
            resourceInputs["dbSystemId"] = args ? args.dbSystemId : undefined;
            resourceInputs["definedTags"] = args ? args.definedTags : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["freeformTags"] = args ? args.freeformTags : undefined;
            resourceInputs["isDeleteProtected"] = args ? args.isDeleteProtected : undefined;
            resourceInputs["replicaOverrides"] = args ? args.replicaOverrides : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["availabilityDomain"] = undefined /*out*/;
            resourceInputs["compartmentId"] = undefined /*out*/;
            resourceInputs["configurationId"] = undefined /*out*/;
            resourceInputs["faultDomain"] = undefined /*out*/;
            resourceInputs["ipAddress"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["mysqlVersion"] = undefined /*out*/;
            resourceInputs["port"] = undefined /*out*/;
            resourceInputs["portX"] = undefined /*out*/;
            resourceInputs["secureConnections"] = undefined /*out*/;
            resourceInputs["shapeName"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MysqlReplica.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MysqlReplica resources.
 */
export interface MysqlReplicaState {
    availabilityDomain?: pulumi.Input<string>;
    compartmentId?: pulumi.Input<string>;
    configurationId?: pulumi.Input<string>;
    dbSystemId?: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    faultDomain?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    ipAddress?: pulumi.Input<string>;
    isDeleteProtected?: pulumi.Input<boolean>;
    lifecycleDetails?: pulumi.Input<string>;
    mysqlVersion?: pulumi.Input<string>;
    port?: pulumi.Input<number>;
    portX?: pulumi.Input<number>;
    replicaOverrides?: pulumi.Input<inputs.MysqlReplicaReplicaOverrides>;
    secureConnections?: pulumi.Input<pulumi.Input<inputs.MysqlReplicaSecureConnection>[]>;
    shapeName?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MysqlReplicaTimeouts>;
}

/**
 * The set of arguments for constructing a MysqlReplica resource.
 */
export interface MysqlReplicaArgs {
    dbSystemId: pulumi.Input<string>;
    definedTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    freeformTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isDeleteProtected?: pulumi.Input<boolean>;
    replicaOverrides?: pulumi.Input<inputs.MysqlReplicaReplicaOverrides>;
    timeouts?: pulumi.Input<inputs.MysqlReplicaTimeouts>;
}
