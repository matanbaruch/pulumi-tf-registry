// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TacacsServer extends pulumi.CustomResource {
    /**
     * Get an existing TacacsServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TacacsServerState, opts?: pulumi.CustomResourceOptions): TacacsServer {
        return new TacacsServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/tacacsServer:TacacsServer';

    /**
     * Returns true if the given object is an instance of TacacsServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TacacsServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TacacsServer.__pulumiType;
    }

    public readonly host!: pulumi.Output<outputs.TacacsServerHost | undefined>;
    /**
     * The moniter interval in seconds (default 60)
     */
    public readonly interval!: pulumi.Output<number | undefined>;
    /**
     * Configure TACACS+ servers
     */
    public readonly monitor!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a TacacsServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TacacsServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TacacsServerArgs | TacacsServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TacacsServerState | undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["monitor"] = state ? state.monitor : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as TacacsServerArgs | undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["monitor"] = args ? args.monitor : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TacacsServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TacacsServer resources.
 */
export interface TacacsServerState {
    host?: pulumi.Input<inputs.TacacsServerHost>;
    /**
     * The moniter interval in seconds (default 60)
     */
    interval?: pulumi.Input<number>;
    /**
     * Configure TACACS+ servers
     */
    monitor?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TacacsServer resource.
 */
export interface TacacsServerArgs {
    host?: pulumi.Input<inputs.TacacsServerHost>;
    /**
     * The moniter interval in seconds (default 60)
     */
    interval?: pulumi.Input<number>;
    /**
     * Configure TACACS+ servers
     */
    monitor?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
