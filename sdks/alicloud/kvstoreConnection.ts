// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class KvstoreConnection extends pulumi.CustomResource {
    /**
     * Get an existing KvstoreConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KvstoreConnectionState, opts?: pulumi.CustomResourceOptions): KvstoreConnection {
        return new KvstoreConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/kvstoreConnection:KvstoreConnection';

    /**
     * Returns true if the given object is an instance of KvstoreConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KvstoreConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KvstoreConnection.__pulumiType;
    }

    public /*out*/ readonly connectionString!: pulumi.Output<string>;
    public readonly connectionStringPrefix!: pulumi.Output<string>;
    public readonly instanceId!: pulumi.Output<string>;
    public readonly port!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.KvstoreConnectionTimeouts | undefined>;

    /**
     * Create a KvstoreConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KvstoreConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KvstoreConnectionArgs | KvstoreConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KvstoreConnectionState | undefined;
            resourceInputs["connectionString"] = state ? state.connectionString : undefined;
            resourceInputs["connectionStringPrefix"] = state ? state.connectionStringPrefix : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as KvstoreConnectionArgs | undefined;
            if ((!args || args.connectionStringPrefix === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionStringPrefix'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            resourceInputs["connectionStringPrefix"] = args ? args.connectionStringPrefix : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["connectionString"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KvstoreConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KvstoreConnection resources.
 */
export interface KvstoreConnectionState {
    connectionString?: pulumi.Input<string>;
    connectionStringPrefix?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    port?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KvstoreConnectionTimeouts>;
}

/**
 * The set of arguments for constructing a KvstoreConnection resource.
 */
export interface KvstoreConnectionArgs {
    connectionStringPrefix: pulumi.Input<string>;
    instanceId: pulumi.Input<string>;
    port: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.KvstoreConnectionTimeouts>;
}
