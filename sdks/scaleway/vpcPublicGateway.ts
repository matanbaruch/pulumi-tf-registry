// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VpcPublicGateway extends pulumi.CustomResource {
    /**
     * Get an existing VpcPublicGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcPublicGatewayState, opts?: pulumi.CustomResourceOptions): VpcPublicGateway {
        return new VpcPublicGateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'scaleway:index/vpcPublicGateway:VpcPublicGateway';

    /**
     * Returns true if the given object is an instance of VpcPublicGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcPublicGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcPublicGateway.__pulumiType;
    }

    /**
     * Enable SSH bastion on the gateway
     */
    public readonly bastionEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Port of the SSH bastion
     */
    public readonly bastionPort!: pulumi.Output<number>;
    /**
     * The date and time of the creation of the public gateway
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Enable SMTP on the gateway
     */
    public readonly enableSmtp!: pulumi.Output<boolean>;
    /**
     * attach an existing IP to the gateway
     */
    public readonly ipId!: pulumi.Output<string>;
    /**
     * name of the gateway
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * The project_id you want to attach the resource to
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Trigger a refresh of the SSH keys for a given Public Gateway by changing this field's value
     */
    public readonly refreshSshKeys!: pulumi.Output<string | undefined>;
    /**
     * The status of the public gateway
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The tags associated with public gateway
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.VpcPublicGatewayTimeouts | undefined>;
    /**
     * gateway type
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * The date and time of the last update of the public gateway
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * override the gateway's default recursive DNS servers, if DNS features are enabled
     */
    public readonly upstreamDnsServers!: pulumi.Output<string[] | undefined>;
    /**
     * The zone you want to attach the resource to
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a VpcPublicGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcPublicGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcPublicGatewayArgs | VpcPublicGatewayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcPublicGatewayState | undefined;
            resourceInputs["bastionEnabled"] = state ? state.bastionEnabled : undefined;
            resourceInputs["bastionPort"] = state ? state.bastionPort : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["enableSmtp"] = state ? state.enableSmtp : undefined;
            resourceInputs["ipId"] = state ? state.ipId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["refreshSshKeys"] = state ? state.refreshSshKeys : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["upstreamDnsServers"] = state ? state.upstreamDnsServers : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as VpcPublicGatewayArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["bastionEnabled"] = args ? args.bastionEnabled : undefined;
            resourceInputs["bastionPort"] = args ? args.bastionPort : undefined;
            resourceInputs["enableSmtp"] = args ? args.enableSmtp : undefined;
            resourceInputs["ipId"] = args ? args.ipId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["refreshSshKeys"] = args ? args.refreshSshKeys : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["upstreamDnsServers"] = args ? args.upstreamDnsServers : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcPublicGateway.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcPublicGateway resources.
 */
export interface VpcPublicGatewayState {
    /**
     * Enable SSH bastion on the gateway
     */
    bastionEnabled?: pulumi.Input<boolean>;
    /**
     * Port of the SSH bastion
     */
    bastionPort?: pulumi.Input<number>;
    /**
     * The date and time of the creation of the public gateway
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Enable SMTP on the gateway
     */
    enableSmtp?: pulumi.Input<boolean>;
    /**
     * attach an existing IP to the gateway
     */
    ipId?: pulumi.Input<string>;
    /**
     * name of the gateway
     */
    name?: pulumi.Input<string>;
    /**
     * The organization_id you want to attach the resource to
     */
    organizationId?: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * Trigger a refresh of the SSH keys for a given Public Gateway by changing this field's value
     */
    refreshSshKeys?: pulumi.Input<string>;
    /**
     * The status of the public gateway
     */
    status?: pulumi.Input<string>;
    /**
     * The tags associated with public gateway
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.VpcPublicGatewayTimeouts>;
    /**
     * gateway type
     */
    type?: pulumi.Input<string>;
    /**
     * The date and time of the last update of the public gateway
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * override the gateway's default recursive DNS servers, if DNS features are enabled
     */
    upstreamDnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The zone you want to attach the resource to
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpcPublicGateway resource.
 */
export interface VpcPublicGatewayArgs {
    /**
     * Enable SSH bastion on the gateway
     */
    bastionEnabled?: pulumi.Input<boolean>;
    /**
     * Port of the SSH bastion
     */
    bastionPort?: pulumi.Input<number>;
    /**
     * Enable SMTP on the gateway
     */
    enableSmtp?: pulumi.Input<boolean>;
    /**
     * attach an existing IP to the gateway
     */
    ipId?: pulumi.Input<string>;
    /**
     * name of the gateway
     */
    name?: pulumi.Input<string>;
    /**
     * The project_id you want to attach the resource to
     */
    projectId?: pulumi.Input<string>;
    /**
     * Trigger a refresh of the SSH keys for a given Public Gateway by changing this field's value
     */
    refreshSshKeys?: pulumi.Input<string>;
    /**
     * The tags associated with public gateway
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.VpcPublicGatewayTimeouts>;
    /**
     * gateway type
     */
    type: pulumi.Input<string>;
    /**
     * override the gateway's default recursive DNS servers, if DNS features are enabled
     */
    upstreamDnsServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The zone you want to attach the resource to
     */
    zone?: pulumi.Input<string>;
}
