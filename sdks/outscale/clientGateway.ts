// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClientGateway extends pulumi.CustomResource {
    /**
     * Get an existing ClientGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClientGatewayState, opts?: pulumi.CustomResourceOptions): ClientGateway {
        return new ClientGateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'outscale:index/clientGateway:ClientGateway';

    /**
     * Returns true if the given object is an instance of ClientGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClientGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClientGateway.__pulumiType;
    }

    public readonly bgpAsn!: pulumi.Output<number>;
    public /*out*/ readonly clientGatewayId!: pulumi.Output<string>;
    public readonly connectionType!: pulumi.Output<string>;
    public readonly publicIp!: pulumi.Output<string>;
    public /*out*/ readonly requestId!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.ClientGatewayTag[] | undefined>;

    /**
     * Create a ClientGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClientGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClientGatewayArgs | ClientGatewayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClientGatewayState | undefined;
            resourceInputs["bgpAsn"] = state ? state.bgpAsn : undefined;
            resourceInputs["clientGatewayId"] = state ? state.clientGatewayId : undefined;
            resourceInputs["connectionType"] = state ? state.connectionType : undefined;
            resourceInputs["publicIp"] = state ? state.publicIp : undefined;
            resourceInputs["requestId"] = state ? state.requestId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ClientGatewayArgs | undefined;
            if ((!args || args.bgpAsn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bgpAsn'");
            }
            if ((!args || args.connectionType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionType'");
            }
            if ((!args || args.publicIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publicIp'");
            }
            resourceInputs["bgpAsn"] = args ? args.bgpAsn : undefined;
            resourceInputs["connectionType"] = args ? args.connectionType : undefined;
            resourceInputs["publicIp"] = args ? args.publicIp : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["clientGatewayId"] = undefined /*out*/;
            resourceInputs["requestId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClientGateway.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClientGateway resources.
 */
export interface ClientGatewayState {
    bgpAsn?: pulumi.Input<number>;
    clientGatewayId?: pulumi.Input<string>;
    connectionType?: pulumi.Input<string>;
    publicIp?: pulumi.Input<string>;
    requestId?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ClientGatewayTag>[]>;
}

/**
 * The set of arguments for constructing a ClientGateway resource.
 */
export interface ClientGatewayArgs {
    bgpAsn: pulumi.Input<number>;
    connectionType: pulumi.Input<string>;
    publicIp: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.ClientGatewayTag>[]>;
}
