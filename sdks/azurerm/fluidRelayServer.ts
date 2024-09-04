// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FluidRelayServer extends pulumi.CustomResource {
    /**
     * Get an existing FluidRelayServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FluidRelayServerState, opts?: pulumi.CustomResourceOptions): FluidRelayServer {
        return new FluidRelayServer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/fluidRelayServer:FluidRelayServer';

    /**
     * Returns true if the given object is an instance of FluidRelayServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FluidRelayServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FluidRelayServer.__pulumiType;
    }

    public /*out*/ readonly frsTenantId!: pulumi.Output<string>;
    public readonly identity!: pulumi.Output<outputs.FluidRelayServerIdentity | undefined>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly ordererEndpoints!: pulumi.Output<string[]>;
    public /*out*/ readonly primaryKey!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public /*out*/ readonly secondaryKey!: pulumi.Output<string>;
    public /*out*/ readonly serviceEndpoints!: pulumi.Output<string[]>;
    public /*out*/ readonly storageEndpoints!: pulumi.Output<string[]>;
    public readonly storageSku!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.FluidRelayServerTimeouts | undefined>;

    /**
     * Create a FluidRelayServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FluidRelayServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FluidRelayServerArgs | FluidRelayServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FluidRelayServerState | undefined;
            resourceInputs["frsTenantId"] = state ? state.frsTenantId : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ordererEndpoints"] = state ? state.ordererEndpoints : undefined;
            resourceInputs["primaryKey"] = state ? state.primaryKey : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["secondaryKey"] = state ? state.secondaryKey : undefined;
            resourceInputs["serviceEndpoints"] = state ? state.serviceEndpoints : undefined;
            resourceInputs["storageEndpoints"] = state ? state.storageEndpoints : undefined;
            resourceInputs["storageSku"] = state ? state.storageSku : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as FluidRelayServerArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["storageSku"] = args ? args.storageSku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["frsTenantId"] = undefined /*out*/;
            resourceInputs["ordererEndpoints"] = undefined /*out*/;
            resourceInputs["primaryKey"] = undefined /*out*/;
            resourceInputs["secondaryKey"] = undefined /*out*/;
            resourceInputs["serviceEndpoints"] = undefined /*out*/;
            resourceInputs["storageEndpoints"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["primaryKey", "secondaryKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(FluidRelayServer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FluidRelayServer resources.
 */
export interface FluidRelayServerState {
    frsTenantId?: pulumi.Input<string>;
    identity?: pulumi.Input<inputs.FluidRelayServerIdentity>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    ordererEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
    primaryKey?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    secondaryKey?: pulumi.Input<string>;
    serviceEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
    storageEndpoints?: pulumi.Input<pulumi.Input<string>[]>;
    storageSku?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.FluidRelayServerTimeouts>;
}

/**
 * The set of arguments for constructing a FluidRelayServer resource.
 */
export interface FluidRelayServerArgs {
    identity?: pulumi.Input<inputs.FluidRelayServerIdentity>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    storageSku?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.FluidRelayServerTimeouts>;
}
