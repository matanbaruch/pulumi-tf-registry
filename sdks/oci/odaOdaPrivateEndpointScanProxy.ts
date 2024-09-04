// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OdaOdaPrivateEndpointScanProxy extends pulumi.CustomResource {
    /**
     * Get an existing OdaOdaPrivateEndpointScanProxy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OdaOdaPrivateEndpointScanProxyState, opts?: pulumi.CustomResourceOptions): OdaOdaPrivateEndpointScanProxy {
        return new OdaOdaPrivateEndpointScanProxy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/odaOdaPrivateEndpointScanProxy:OdaOdaPrivateEndpointScanProxy';

    /**
     * Returns true if the given object is an instance of OdaOdaPrivateEndpointScanProxy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OdaOdaPrivateEndpointScanProxy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OdaOdaPrivateEndpointScanProxy.__pulumiType;
    }

    public readonly odaPrivateEndpointId!: pulumi.Output<string>;
    public readonly protocol!: pulumi.Output<string>;
    public readonly scanListenerInfos!: pulumi.Output<outputs.OdaOdaPrivateEndpointScanProxyScanListenerInfo[]>;
    public readonly scanListenerType!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.OdaOdaPrivateEndpointScanProxyTimeouts | undefined>;

    /**
     * Create a OdaOdaPrivateEndpointScanProxy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OdaOdaPrivateEndpointScanProxyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OdaOdaPrivateEndpointScanProxyArgs | OdaOdaPrivateEndpointScanProxyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OdaOdaPrivateEndpointScanProxyState | undefined;
            resourceInputs["odaPrivateEndpointId"] = state ? state.odaPrivateEndpointId : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["scanListenerInfos"] = state ? state.scanListenerInfos : undefined;
            resourceInputs["scanListenerType"] = state ? state.scanListenerType : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as OdaOdaPrivateEndpointScanProxyArgs | undefined;
            if ((!args || args.odaPrivateEndpointId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'odaPrivateEndpointId'");
            }
            if ((!args || args.protocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocol'");
            }
            if ((!args || args.scanListenerInfos === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scanListenerInfos'");
            }
            if ((!args || args.scanListenerType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scanListenerType'");
            }
            resourceInputs["odaPrivateEndpointId"] = args ? args.odaPrivateEndpointId : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["scanListenerInfos"] = args ? args.scanListenerInfos : undefined;
            resourceInputs["scanListenerType"] = args ? args.scanListenerType : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OdaOdaPrivateEndpointScanProxy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OdaOdaPrivateEndpointScanProxy resources.
 */
export interface OdaOdaPrivateEndpointScanProxyState {
    odaPrivateEndpointId?: pulumi.Input<string>;
    protocol?: pulumi.Input<string>;
    scanListenerInfos?: pulumi.Input<pulumi.Input<inputs.OdaOdaPrivateEndpointScanProxyScanListenerInfo>[]>;
    scanListenerType?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.OdaOdaPrivateEndpointScanProxyTimeouts>;
}

/**
 * The set of arguments for constructing a OdaOdaPrivateEndpointScanProxy resource.
 */
export interface OdaOdaPrivateEndpointScanProxyArgs {
    odaPrivateEndpointId: pulumi.Input<string>;
    protocol: pulumi.Input<string>;
    scanListenerInfos: pulumi.Input<pulumi.Input<inputs.OdaOdaPrivateEndpointScanProxyScanListenerInfo>[]>;
    scanListenerType: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.OdaOdaPrivateEndpointScanProxyTimeouts>;
}
