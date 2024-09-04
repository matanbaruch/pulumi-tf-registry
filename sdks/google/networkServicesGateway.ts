// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkServicesGateway extends pulumi.CustomResource {
    /**
     * Get an existing NetworkServicesGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkServicesGatewayState, opts?: pulumi.CustomResourceOptions): NetworkServicesGateway {
        return new NetworkServicesGateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/networkServicesGateway:NetworkServicesGateway';

    /**
     * Returns true if the given object is an instance of NetworkServicesGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkServicesGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkServicesGateway.__pulumiType;
    }

    /**
     * Zero or one IPv4-address on which the Gateway will receive the traffic. When no address is provided, an IP from the
     * subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'. Gateways of type 'OPEN_MESH'
     * listen on 0.0.0.0.
     */
    public readonly addresses!: pulumi.Output<string[]>;
    /**
     * A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing
     * a TLS connection. This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    public readonly certificateUrls!: pulumi.Output<string[] | undefined>;
    /**
     * Time the AccessPolicy was created in UTC.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the
     * gateway creation. If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it
     * will be deleted.
     */
    public readonly deleteSwgAutogenRouterOnDestroy!: pulumi.Output<boolean | undefined>;
    /**
     * A free-text description of the resource. Max length 1024 characters.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM
     * to Proxy) initiated connections. For example: 'projects/*&#47;locations/*&#47;gatewaySecurityPolicies/swg-policy'. This policy
     * is specific to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    public readonly gatewaySecurityPolicy!: pulumi.Output<string | undefined>;
    /**
     * Set of label tags associated with the Gateway resource. **Note**: This field is non-authoritative, and will only manage
     * the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
     * the resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The location of the gateway. The default value is 'global'.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Short name of the Gateway resource to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The relative resource name identifying the VPC network that is using this configuration. For example:
     * 'projects/*&#47;global/networks/network-1'. Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    public readonly network!: pulumi.Output<string | undefined>;
    /**
     * One or more port numbers (1-65535), on which the Gateway will receive traffic. The proxy binds to the specified ports.
     * Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support
     * multiple ports.
     */
    public readonly ports!: pulumi.Output<number[]>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Immutable. Scope determines how configuration across multiple Gateway instances are merged. The configuration for
     * multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load
     * balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.
     */
    public readonly scope!: pulumi.Output<string | undefined>;
    /**
     * Server-defined URL of this resource.
     */
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is
     * disabled.
     */
    public readonly serverTlsPolicy!: pulumi.Output<string | undefined>;
    /**
     * The relative resource name identifying the subnetwork in which this SWG is allocated. For example:
     * 'projects/*&#47;regions/us-central1/subnetworks/network-1'. Currently, this field is specific to gateways of type
     * 'SECURE_WEB_GATEWAY.
     */
    public readonly subnetwork!: pulumi.Output<string | undefined>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkServicesGatewayTimeouts | undefined>;
    /**
     * Immutable. The type of the customer-managed gateway. Possible values are: * OPEN_MESH * SECURE_WEB_GATEWAY. Possible
     * values: ["TYPE_UNSPECIFIED", "OPEN_MESH", "SECURE_WEB_GATEWAY"]
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * Time the AccessPolicy was updated in UTC.
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a NetworkServicesGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkServicesGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkServicesGatewayArgs | NetworkServicesGatewayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkServicesGatewayState | undefined;
            resourceInputs["addresses"] = state ? state.addresses : undefined;
            resourceInputs["certificateUrls"] = state ? state.certificateUrls : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["deleteSwgAutogenRouterOnDestroy"] = state ? state.deleteSwgAutogenRouterOnDestroy : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["gatewaySecurityPolicy"] = state ? state.gatewaySecurityPolicy : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["ports"] = state ? state.ports : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["serverTlsPolicy"] = state ? state.serverTlsPolicy : undefined;
            resourceInputs["subnetwork"] = state ? state.subnetwork : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as NetworkServicesGatewayArgs | undefined;
            if ((!args || args.ports === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ports'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["addresses"] = args ? args.addresses : undefined;
            resourceInputs["certificateUrls"] = args ? args.certificateUrls : undefined;
            resourceInputs["deleteSwgAutogenRouterOnDestroy"] = args ? args.deleteSwgAutogenRouterOnDestroy : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["gatewaySecurityPolicy"] = args ? args.gatewaySecurityPolicy : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["ports"] = args ? args.ports : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
            resourceInputs["serverTlsPolicy"] = args ? args.serverTlsPolicy : undefined;
            resourceInputs["subnetwork"] = args ? args.subnetwork : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkServicesGateway.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkServicesGateway resources.
 */
export interface NetworkServicesGatewayState {
    /**
     * Zero or one IPv4-address on which the Gateway will receive the traffic. When no address is provided, an IP from the
     * subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'. Gateways of type 'OPEN_MESH'
     * listen on 0.0.0.0.
     */
    addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing
     * a TLS connection. This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    certificateUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Time the AccessPolicy was created in UTC.
     */
    createTime?: pulumi.Input<string>;
    /**
     * When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the
     * gateway creation. If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it
     * will be deleted.
     */
    deleteSwgAutogenRouterOnDestroy?: pulumi.Input<boolean>;
    /**
     * A free-text description of the resource. Max length 1024 characters.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM
     * to Proxy) initiated connections. For example: 'projects/*&#47;locations/*&#47;gatewaySecurityPolicies/swg-policy'. This policy
     * is specific to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    gatewaySecurityPolicy?: pulumi.Input<string>;
    /**
     * Set of label tags associated with the Gateway resource. **Note**: This field is non-authoritative, and will only manage
     * the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
     * the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location of the gateway. The default value is 'global'.
     */
    location?: pulumi.Input<string>;
    /**
     * Short name of the Gateway resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The relative resource name identifying the VPC network that is using this configuration. For example:
     * 'projects/*&#47;global/networks/network-1'. Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    network?: pulumi.Input<string>;
    /**
     * One or more port numbers (1-65535), on which the Gateway will receive traffic. The proxy binds to the specified ports.
     * Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support
     * multiple ports.
     */
    ports?: pulumi.Input<pulumi.Input<number>[]>;
    project?: pulumi.Input<string>;
    /**
     * Immutable. Scope determines how configuration across multiple Gateway instances are merged. The configuration for
     * multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load
     * balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.
     */
    scope?: pulumi.Input<string>;
    /**
     * Server-defined URL of this resource.
     */
    selfLink?: pulumi.Input<string>;
    /**
     * A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is
     * disabled.
     */
    serverTlsPolicy?: pulumi.Input<string>;
    /**
     * The relative resource name identifying the subnetwork in which this SWG is allocated. For example:
     * 'projects/*&#47;regions/us-central1/subnetworks/network-1'. Currently, this field is specific to gateways of type
     * 'SECURE_WEB_GATEWAY.
     */
    subnetwork?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NetworkServicesGatewayTimeouts>;
    /**
     * Immutable. The type of the customer-managed gateway. Possible values are: * OPEN_MESH * SECURE_WEB_GATEWAY. Possible
     * values: ["TYPE_UNSPECIFIED", "OPEN_MESH", "SECURE_WEB_GATEWAY"]
     */
    type?: pulumi.Input<string>;
    /**
     * Time the AccessPolicy was updated in UTC.
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkServicesGateway resource.
 */
export interface NetworkServicesGatewayArgs {
    /**
     * Zero or one IPv4-address on which the Gateway will receive the traffic. When no address is provided, an IP from the
     * subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'. Gateways of type 'OPEN_MESH'
     * listen on 0.0.0.0.
     */
    addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing
     * a TLS connection. This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    certificateUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the
     * gateway creation. If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it
     * will be deleted.
     */
    deleteSwgAutogenRouterOnDestroy?: pulumi.Input<boolean>;
    /**
     * A free-text description of the resource. Max length 1024 characters.
     */
    description?: pulumi.Input<string>;
    /**
     * A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM
     * to Proxy) initiated connections. For example: 'projects/*&#47;locations/*&#47;gatewaySecurityPolicies/swg-policy'. This policy
     * is specific to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    gatewaySecurityPolicy?: pulumi.Input<string>;
    /**
     * Set of label tags associated with the Gateway resource. **Note**: This field is non-authoritative, and will only manage
     * the labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on
     * the resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The location of the gateway. The default value is 'global'.
     */
    location?: pulumi.Input<string>;
    /**
     * Short name of the Gateway resource to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * The relative resource name identifying the VPC network that is using this configuration. For example:
     * 'projects/*&#47;global/networks/network-1'. Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.
     */
    network?: pulumi.Input<string>;
    /**
     * One or more port numbers (1-65535), on which the Gateway will receive traffic. The proxy binds to the specified ports.
     * Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support
     * multiple ports.
     */
    ports: pulumi.Input<pulumi.Input<number>[]>;
    project?: pulumi.Input<string>;
    /**
     * Immutable. Scope determines how configuration across multiple Gateway instances are merged. The configuration for
     * multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load
     * balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.
     */
    scope?: pulumi.Input<string>;
    /**
     * A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is
     * disabled.
     */
    serverTlsPolicy?: pulumi.Input<string>;
    /**
     * The relative resource name identifying the subnetwork in which this SWG is allocated. For example:
     * 'projects/*&#47;regions/us-central1/subnetworks/network-1'. Currently, this field is specific to gateways of type
     * 'SECURE_WEB_GATEWAY.
     */
    subnetwork?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkServicesGatewayTimeouts>;
    /**
     * Immutable. The type of the customer-managed gateway. Possible values are: * OPEN_MESH * SECURE_WEB_GATEWAY. Possible
     * values: ["TYPE_UNSPECIFIED", "OPEN_MESH", "SECURE_WEB_GATEWAY"]
     */
    type: pulumi.Input<string>;
}
