// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeTargetHttpProxy extends pulumi.CustomResource {
    /**
     * Get an existing ComputeTargetHttpProxy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeTargetHttpProxyState, opts?: pulumi.CustomResourceOptions): ComputeTargetHttpProxy {
        return new ComputeTargetHttpProxy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/computeTargetHttpProxy:ComputeTargetHttpProxy';

    /**
     * Returns true if the given object is an instance of ComputeTargetHttpProxy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeTargetHttpProxy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeTargetHttpProxy.__pulumiType;
    }

    /**
     * Creation timestamp in RFC3339 text format.
     */
    public /*out*/ readonly creationTimestamp!: pulumi.Output<string>;
    /**
     * An optional description of this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in
     * seconds). If an HTTP keepalive is not specified, a default value (610 seconds) will be used. For Global external HTTP(S)
     * load balancer, the minimum allowed value is 5 seconds and the maximum allowed value is 1200 seconds. For Global external
     * HTTP(S) load balancer (classic), this option is not available publicly.
     */
    public readonly httpKeepAliveTimeoutSec!: pulumi.Output<number | undefined>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to
     * INTERNAL_SELF_MANAGED.
     */
    public readonly proxyBind!: pulumi.Output<boolean>;
    /**
     * The unique identifier for the resource.
     */
    public /*out*/ readonly proxyId!: pulumi.Output<number>;
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeTargetHttpProxyTimeouts | undefined>;
    /**
     * A reference to the UrlMap resource that defines the mapping from URL to the BackendService.
     */
    public readonly urlMap!: pulumi.Output<string>;

    /**
     * Create a ComputeTargetHttpProxy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeTargetHttpProxyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeTargetHttpProxyArgs | ComputeTargetHttpProxyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeTargetHttpProxyState | undefined;
            resourceInputs["creationTimestamp"] = state ? state.creationTimestamp : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["httpKeepAliveTimeoutSec"] = state ? state.httpKeepAliveTimeoutSec : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["proxyBind"] = state ? state.proxyBind : undefined;
            resourceInputs["proxyId"] = state ? state.proxyId : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["urlMap"] = state ? state.urlMap : undefined;
        } else {
            const args = argsOrState as ComputeTargetHttpProxyArgs | undefined;
            if ((!args || args.urlMap === undefined) && !opts.urn) {
                throw new Error("Missing required property 'urlMap'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["httpKeepAliveTimeoutSec"] = args ? args.httpKeepAliveTimeoutSec : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["proxyBind"] = args ? args.proxyBind : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["urlMap"] = args ? args.urlMap : undefined;
            resourceInputs["creationTimestamp"] = undefined /*out*/;
            resourceInputs["proxyId"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeTargetHttpProxy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeTargetHttpProxy resources.
 */
export interface ComputeTargetHttpProxyState {
    /**
     * Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: pulumi.Input<string>;
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in
     * seconds). If an HTTP keepalive is not specified, a default value (610 seconds) will be used. For Global external HTTP(S)
     * load balancer, the minimum allowed value is 5 seconds and the maximum allowed value is 1200 seconds. For Global external
     * HTTP(S) load balancer (classic), this option is not available publicly.
     */
    httpKeepAliveTimeoutSec?: pulumi.Input<number>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to
     * INTERNAL_SELF_MANAGED.
     */
    proxyBind?: pulumi.Input<boolean>;
    /**
     * The unique identifier for the resource.
     */
    proxyId?: pulumi.Input<number>;
    selfLink?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeTargetHttpProxyTimeouts>;
    /**
     * A reference to the UrlMap resource that defines the mapping from URL to the BackendService.
     */
    urlMap?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComputeTargetHttpProxy resource.
 */
export interface ComputeTargetHttpProxyArgs {
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in
     * seconds). If an HTTP keepalive is not specified, a default value (610 seconds) will be used. For Global external HTTP(S)
     * load balancer, the minimum allowed value is 5 seconds and the maximum allowed value is 1200 seconds. For Global external
     * HTTP(S) load balancer (classic), this option is not available publicly.
     */
    httpKeepAliveTimeoutSec?: pulumi.Input<number>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to
     * INTERNAL_SELF_MANAGED.
     */
    proxyBind?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.ComputeTargetHttpProxyTimeouts>;
    /**
     * A reference to the UrlMap resource that defines the mapping from URL to the BackendService.
     */
    urlMap: pulumi.Input<string>;
}
