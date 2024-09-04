// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DebugHc extends pulumi.CustomResource {
    /**
     * Get an existing DebugHc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DebugHcState, opts?: pulumi.CustomResourceOptions): DebugHc {
        return new DebugHc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/debugHc:DebugHc';

    /**
     * Returns true if the given object is an instance of DebugHc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DebugHc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DebugHc.__pulumiType;
    }

    /**
     * Dump per-request in anomaly cases only
     */
    public readonly anomaly!: pulumi.Output<number | undefined>;
    /**
     * Application service id (virtual-server_port_protocol)
     */
    public readonly appSvcId!: pulumi.Output<string | undefined>;
    /**
     * Debug logs for harmony controller (error)
     */
    public readonly error!: pulumi.Output<number | undefined>;
    /**
     * Debug logs for harmony controller (metrics)
     */
    public readonly metrics!: pulumi.Output<number | undefined>;
    /**
     * UUID of the object to filter
     */
    public readonly objectUuid!: pulumi.Output<string | undefined>;
    /**
     * Debug logs for harmony controller (per-connection)
     */
    public readonly perConnection!: pulumi.Output<number | undefined>;
    /**
     * Debug logs for harmony controller (per-request)
     */
    public readonly perRequest!: pulumi.Output<number | undefined>;
    /**
     * Debug logs for harmony controller (registration)
     */
    public readonly registration!: pulumi.Output<number | undefined>;
    /**
     * URI of the object to filter
     */
    public readonly uri!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DebugHc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DebugHcArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DebugHcArgs | DebugHcState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DebugHcState | undefined;
            resourceInputs["anomaly"] = state ? state.anomaly : undefined;
            resourceInputs["appSvcId"] = state ? state.appSvcId : undefined;
            resourceInputs["error"] = state ? state.error : undefined;
            resourceInputs["metrics"] = state ? state.metrics : undefined;
            resourceInputs["objectUuid"] = state ? state.objectUuid : undefined;
            resourceInputs["perConnection"] = state ? state.perConnection : undefined;
            resourceInputs["perRequest"] = state ? state.perRequest : undefined;
            resourceInputs["registration"] = state ? state.registration : undefined;
            resourceInputs["uri"] = state ? state.uri : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DebugHcArgs | undefined;
            resourceInputs["anomaly"] = args ? args.anomaly : undefined;
            resourceInputs["appSvcId"] = args ? args.appSvcId : undefined;
            resourceInputs["error"] = args ? args.error : undefined;
            resourceInputs["metrics"] = args ? args.metrics : undefined;
            resourceInputs["objectUuid"] = args ? args.objectUuid : undefined;
            resourceInputs["perConnection"] = args ? args.perConnection : undefined;
            resourceInputs["perRequest"] = args ? args.perRequest : undefined;
            resourceInputs["registration"] = args ? args.registration : undefined;
            resourceInputs["uri"] = args ? args.uri : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DebugHc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DebugHc resources.
 */
export interface DebugHcState {
    /**
     * Dump per-request in anomaly cases only
     */
    anomaly?: pulumi.Input<number>;
    /**
     * Application service id (virtual-server_port_protocol)
     */
    appSvcId?: pulumi.Input<string>;
    /**
     * Debug logs for harmony controller (error)
     */
    error?: pulumi.Input<number>;
    /**
     * Debug logs for harmony controller (metrics)
     */
    metrics?: pulumi.Input<number>;
    /**
     * UUID of the object to filter
     */
    objectUuid?: pulumi.Input<string>;
    /**
     * Debug logs for harmony controller (per-connection)
     */
    perConnection?: pulumi.Input<number>;
    /**
     * Debug logs for harmony controller (per-request)
     */
    perRequest?: pulumi.Input<number>;
    /**
     * Debug logs for harmony controller (registration)
     */
    registration?: pulumi.Input<number>;
    /**
     * URI of the object to filter
     */
    uri?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DebugHc resource.
 */
export interface DebugHcArgs {
    /**
     * Dump per-request in anomaly cases only
     */
    anomaly?: pulumi.Input<number>;
    /**
     * Application service id (virtual-server_port_protocol)
     */
    appSvcId?: pulumi.Input<string>;
    /**
     * Debug logs for harmony controller (error)
     */
    error?: pulumi.Input<number>;
    /**
     * Debug logs for harmony controller (metrics)
     */
    metrics?: pulumi.Input<number>;
    /**
     * UUID of the object to filter
     */
    objectUuid?: pulumi.Input<string>;
    /**
     * Debug logs for harmony controller (per-connection)
     */
    perConnection?: pulumi.Input<number>;
    /**
     * Debug logs for harmony controller (per-request)
     */
    perRequest?: pulumi.Input<number>;
    /**
     * Debug logs for harmony controller (registration)
     */
    registration?: pulumi.Input<number>;
    /**
     * URI of the object to filter
     */
    uri?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
