// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class K8sNamespaceAnomalies extends pulumi.CustomResource {
    /**
     * Get an existing K8sNamespaceAnomalies resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: K8sNamespaceAnomaliesState, opts?: pulumi.CustomResourceOptions): K8sNamespaceAnomalies {
        return new K8sNamespaceAnomalies(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/k8sNamespaceAnomalies:K8sNamespaceAnomalies';

    /**
     * Returns true if the given object is an instance of K8sNamespaceAnomalies.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is K8sNamespaceAnomalies {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === K8sNamespaceAnomalies.__pulumiType;
    }

    /**
     * Alerts if almost no CPU-limit quota left in namespace
     */
    public readonly cpuLimitsQuotaSaturation!: pulumi.Output<outputs.K8sNamespaceAnomaliesCpuLimitsQuotaSaturation>;
    /**
     * Alerts if almost no CPU-request quota left in namespace
     */
    public readonly cpuRequestsQuotaSaturation!: pulumi.Output<outputs.K8sNamespaceAnomaliesCpuRequestsQuotaSaturation>;
    /**
     * Alerts if almost no memory-limit quota left in namespace
     */
    public readonly memoryLimitsQuotaSaturation!: pulumi.Output<outputs.K8sNamespaceAnomaliesMemoryLimitsQuotaSaturation>;
    /**
     * Alerts if almost no memory-request quota left in namespace
     */
    public readonly memoryRequestsQuotaSaturation!: pulumi.Output<outputs.K8sNamespaceAnomaliesMemoryRequestsQuotaSaturation>;
    /**
     * Alerts if almost no pod quota left in namespace
     */
    public readonly podsQuotaSaturation!: pulumi.Output<outputs.K8sNamespaceAnomaliesPodsQuotaSaturation>;
    /**
     * The scope of this setting (CLOUD_APPLICATION_NAMESPACE, KUBERNETES_CLUSTER). Omit this property if you want to cover the
     * whole environment.
     */
    public readonly scope!: pulumi.Output<string | undefined>;

    /**
     * Create a K8sNamespaceAnomalies resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: K8sNamespaceAnomaliesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: K8sNamespaceAnomaliesArgs | K8sNamespaceAnomaliesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as K8sNamespaceAnomaliesState | undefined;
            resourceInputs["cpuLimitsQuotaSaturation"] = state ? state.cpuLimitsQuotaSaturation : undefined;
            resourceInputs["cpuRequestsQuotaSaturation"] = state ? state.cpuRequestsQuotaSaturation : undefined;
            resourceInputs["memoryLimitsQuotaSaturation"] = state ? state.memoryLimitsQuotaSaturation : undefined;
            resourceInputs["memoryRequestsQuotaSaturation"] = state ? state.memoryRequestsQuotaSaturation : undefined;
            resourceInputs["podsQuotaSaturation"] = state ? state.podsQuotaSaturation : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as K8sNamespaceAnomaliesArgs | undefined;
            if ((!args || args.cpuLimitsQuotaSaturation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cpuLimitsQuotaSaturation'");
            }
            if ((!args || args.cpuRequestsQuotaSaturation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cpuRequestsQuotaSaturation'");
            }
            if ((!args || args.memoryLimitsQuotaSaturation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memoryLimitsQuotaSaturation'");
            }
            if ((!args || args.memoryRequestsQuotaSaturation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'memoryRequestsQuotaSaturation'");
            }
            if ((!args || args.podsQuotaSaturation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'podsQuotaSaturation'");
            }
            resourceInputs["cpuLimitsQuotaSaturation"] = args ? args.cpuLimitsQuotaSaturation : undefined;
            resourceInputs["cpuRequestsQuotaSaturation"] = args ? args.cpuRequestsQuotaSaturation : undefined;
            resourceInputs["memoryLimitsQuotaSaturation"] = args ? args.memoryLimitsQuotaSaturation : undefined;
            resourceInputs["memoryRequestsQuotaSaturation"] = args ? args.memoryRequestsQuotaSaturation : undefined;
            resourceInputs["podsQuotaSaturation"] = args ? args.podsQuotaSaturation : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(K8sNamespaceAnomalies.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering K8sNamespaceAnomalies resources.
 */
export interface K8sNamespaceAnomaliesState {
    /**
     * Alerts if almost no CPU-limit quota left in namespace
     */
    cpuLimitsQuotaSaturation?: pulumi.Input<inputs.K8sNamespaceAnomaliesCpuLimitsQuotaSaturation>;
    /**
     * Alerts if almost no CPU-request quota left in namespace
     */
    cpuRequestsQuotaSaturation?: pulumi.Input<inputs.K8sNamespaceAnomaliesCpuRequestsQuotaSaturation>;
    /**
     * Alerts if almost no memory-limit quota left in namespace
     */
    memoryLimitsQuotaSaturation?: pulumi.Input<inputs.K8sNamespaceAnomaliesMemoryLimitsQuotaSaturation>;
    /**
     * Alerts if almost no memory-request quota left in namespace
     */
    memoryRequestsQuotaSaturation?: pulumi.Input<inputs.K8sNamespaceAnomaliesMemoryRequestsQuotaSaturation>;
    /**
     * Alerts if almost no pod quota left in namespace
     */
    podsQuotaSaturation?: pulumi.Input<inputs.K8sNamespaceAnomaliesPodsQuotaSaturation>;
    /**
     * The scope of this setting (CLOUD_APPLICATION_NAMESPACE, KUBERNETES_CLUSTER). Omit this property if you want to cover the
     * whole environment.
     */
    scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a K8sNamespaceAnomalies resource.
 */
export interface K8sNamespaceAnomaliesArgs {
    /**
     * Alerts if almost no CPU-limit quota left in namespace
     */
    cpuLimitsQuotaSaturation: pulumi.Input<inputs.K8sNamespaceAnomaliesCpuLimitsQuotaSaturation>;
    /**
     * Alerts if almost no CPU-request quota left in namespace
     */
    cpuRequestsQuotaSaturation: pulumi.Input<inputs.K8sNamespaceAnomaliesCpuRequestsQuotaSaturation>;
    /**
     * Alerts if almost no memory-limit quota left in namespace
     */
    memoryLimitsQuotaSaturation: pulumi.Input<inputs.K8sNamespaceAnomaliesMemoryLimitsQuotaSaturation>;
    /**
     * Alerts if almost no memory-request quota left in namespace
     */
    memoryRequestsQuotaSaturation: pulumi.Input<inputs.K8sNamespaceAnomaliesMemoryRequestsQuotaSaturation>;
    /**
     * Alerts if almost no pod quota left in namespace
     */
    podsQuotaSaturation: pulumi.Input<inputs.K8sNamespaceAnomaliesPodsQuotaSaturation>;
    /**
     * The scope of this setting (CLOUD_APPLICATION_NAMESPACE, KUBERNETES_CLUSTER). Omit this property if you want to cover the
     * whole environment.
     */
    scope?: pulumi.Input<string>;
}
