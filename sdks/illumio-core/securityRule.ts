// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecurityRule extends pulumi.CustomResource {
    /**
     * Get an existing SecurityRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityRuleState, opts?: pulumi.CustomResourceOptions): SecurityRule {
        return new SecurityRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'illumio-core:index/securityRule:SecurityRule';

    /**
     * Returns true if the given object is an instance of SecurityRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityRule.__pulumiType;
    }

    /**
     * Consumers for Security Rule. Only one actor can be specified in one consumer block
     */
    public readonly consumers!: pulumi.Output<outputs.SecurityRuleConsumer[]>;
    /**
     * Timestamp when this security rule was first created
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * User who created this security rule
     */
    public /*out*/ readonly createdBy!: pulumi.Output<{[key: string]: string}>;
    /**
     * Timestamp when this security rule was deleted
     */
    public /*out*/ readonly deletedAt!: pulumi.Output<string>;
    /**
     * User who deleted this security rule
     */
    public /*out*/ readonly deletedBy!: pulumi.Output<{[key: string]: string}>;
    /**
     * Description of Security Rule
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Enabled flag. Determines whether the rule will be enabled in ruleset or not
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * External data reference identifier
     */
    public readonly externalDataReference!: pulumi.Output<string | undefined>;
    /**
     * External data set identifier
     */
    public readonly externalDataSet!: pulumi.Output<string | undefined>;
    /**
     * URI of Security Rule
     */
    public /*out*/ readonly href!: pulumi.Output<string>;
    /**
     * Collection of Ingress Service. If resolve_label_as.providers list includes "workloads" then ingress_service is required.
     * Only one of the {"href"} or {"proto", "port", "to_port"} parameter combination is allowed
     */
    public readonly ingressServices!: pulumi.Output<outputs.SecurityRuleIngressService[] | undefined>;
    /**
     * Determines whether machine authentication is enabled. Default value: false
     */
    public readonly machineAuth!: pulumi.Output<boolean | undefined>;
    /**
     * providers for Security Rule. Only one actor can be specified in one providers block
     */
    public readonly providers!: pulumi.Output<outputs.SecurityRuleProvider[]>;
    /**
     * resolve label as for Security rule
     */
    public readonly resolveLabelsAs!: pulumi.Output<outputs.SecurityRuleResolveLabelsAs>;
    /**
     * URI of Rule set, in which security rule will be added
     */
    public readonly ruleSetHref!: pulumi.Output<string>;
    /**
     * Determines whether a secure connection is established. Default value: false
     */
    public readonly secConnect!: pulumi.Output<boolean | undefined>;
    /**
     * Determines whether packet filtering is stateless for the rule. Default value: false
     */
    public readonly stateless!: pulumi.Output<boolean | undefined>;
    /**
     * If false (the default), the created Rule will be an intra-scope rule. If true, it will be extra-scope. Default value:
     * false
     */
    public readonly unscopedConsumers!: pulumi.Output<boolean | undefined>;
    /**
     * Type of update
     */
    public /*out*/ readonly updateType!: pulumi.Output<string>;
    /**
     * Timestamp when this security rule was last updated
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * User who last updated this security rule
     */
    public /*out*/ readonly updatedBy!: pulumi.Output<{[key: string]: string}>;
    /**
     * Whether to use workload subnets instead of IP addresses for providers/consumers. Allowed values are "providers" and/or
     * "consumers"
     */
    public readonly useWorkloadSubnets!: pulumi.Output<string[] | undefined>;

    /**
     * Create a SecurityRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityRuleArgs | SecurityRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityRuleState | undefined;
            resourceInputs["consumers"] = state ? state.consumers : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["deletedAt"] = state ? state.deletedAt : undefined;
            resourceInputs["deletedBy"] = state ? state.deletedBy : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["externalDataReference"] = state ? state.externalDataReference : undefined;
            resourceInputs["externalDataSet"] = state ? state.externalDataSet : undefined;
            resourceInputs["href"] = state ? state.href : undefined;
            resourceInputs["ingressServices"] = state ? state.ingressServices : undefined;
            resourceInputs["machineAuth"] = state ? state.machineAuth : undefined;
            resourceInputs["providers"] = state ? state.providers : undefined;
            resourceInputs["resolveLabelsAs"] = state ? state.resolveLabelsAs : undefined;
            resourceInputs["ruleSetHref"] = state ? state.ruleSetHref : undefined;
            resourceInputs["secConnect"] = state ? state.secConnect : undefined;
            resourceInputs["stateless"] = state ? state.stateless : undefined;
            resourceInputs["unscopedConsumers"] = state ? state.unscopedConsumers : undefined;
            resourceInputs["updateType"] = state ? state.updateType : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["updatedBy"] = state ? state.updatedBy : undefined;
            resourceInputs["useWorkloadSubnets"] = state ? state.useWorkloadSubnets : undefined;
        } else {
            const args = argsOrState as SecurityRuleArgs | undefined;
            if ((!args || args.consumers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'consumers'");
            }
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.providers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'providers'");
            }
            if ((!args || args.resolveLabelsAs === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resolveLabelsAs'");
            }
            if ((!args || args.ruleSetHref === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleSetHref'");
            }
            resourceInputs["consumers"] = args ? args.consumers : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["externalDataReference"] = args ? args.externalDataReference : undefined;
            resourceInputs["externalDataSet"] = args ? args.externalDataSet : undefined;
            resourceInputs["ingressServices"] = args ? args.ingressServices : undefined;
            resourceInputs["machineAuth"] = args ? args.machineAuth : undefined;
            resourceInputs["providers"] = args ? args.providers : undefined;
            resourceInputs["resolveLabelsAs"] = args ? args.resolveLabelsAs : undefined;
            resourceInputs["ruleSetHref"] = args ? args.ruleSetHref : undefined;
            resourceInputs["secConnect"] = args ? args.secConnect : undefined;
            resourceInputs["stateless"] = args ? args.stateless : undefined;
            resourceInputs["unscopedConsumers"] = args ? args.unscopedConsumers : undefined;
            resourceInputs["useWorkloadSubnets"] = args ? args.useWorkloadSubnets : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["deletedAt"] = undefined /*out*/;
            resourceInputs["deletedBy"] = undefined /*out*/;
            resourceInputs["href"] = undefined /*out*/;
            resourceInputs["updateType"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityRule resources.
 */
export interface SecurityRuleState {
    /**
     * Consumers for Security Rule. Only one actor can be specified in one consumer block
     */
    consumers?: pulumi.Input<pulumi.Input<inputs.SecurityRuleConsumer>[]>;
    /**
     * Timestamp when this security rule was first created
     */
    createdAt?: pulumi.Input<string>;
    /**
     * User who created this security rule
     */
    createdBy?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Timestamp when this security rule was deleted
     */
    deletedAt?: pulumi.Input<string>;
    /**
     * User who deleted this security rule
     */
    deletedBy?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Description of Security Rule
     */
    description?: pulumi.Input<string>;
    /**
     * Enabled flag. Determines whether the rule will be enabled in ruleset or not
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * External data reference identifier
     */
    externalDataReference?: pulumi.Input<string>;
    /**
     * External data set identifier
     */
    externalDataSet?: pulumi.Input<string>;
    /**
     * URI of Security Rule
     */
    href?: pulumi.Input<string>;
    /**
     * Collection of Ingress Service. If resolve_label_as.providers list includes "workloads" then ingress_service is required.
     * Only one of the {"href"} or {"proto", "port", "to_port"} parameter combination is allowed
     */
    ingressServices?: pulumi.Input<pulumi.Input<inputs.SecurityRuleIngressService>[]>;
    /**
     * Determines whether machine authentication is enabled. Default value: false
     */
    machineAuth?: pulumi.Input<boolean>;
    /**
     * providers for Security Rule. Only one actor can be specified in one providers block
     */
    providers?: pulumi.Input<pulumi.Input<inputs.SecurityRuleProvider>[]>;
    /**
     * resolve label as for Security rule
     */
    resolveLabelsAs?: pulumi.Input<inputs.SecurityRuleResolveLabelsAs>;
    /**
     * URI of Rule set, in which security rule will be added
     */
    ruleSetHref?: pulumi.Input<string>;
    /**
     * Determines whether a secure connection is established. Default value: false
     */
    secConnect?: pulumi.Input<boolean>;
    /**
     * Determines whether packet filtering is stateless for the rule. Default value: false
     */
    stateless?: pulumi.Input<boolean>;
    /**
     * If false (the default), the created Rule will be an intra-scope rule. If true, it will be extra-scope. Default value:
     * false
     */
    unscopedConsumers?: pulumi.Input<boolean>;
    /**
     * Type of update
     */
    updateType?: pulumi.Input<string>;
    /**
     * Timestamp when this security rule was last updated
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * User who last updated this security rule
     */
    updatedBy?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Whether to use workload subnets instead of IP addresses for providers/consumers. Allowed values are "providers" and/or
     * "consumers"
     */
    useWorkloadSubnets?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SecurityRule resource.
 */
export interface SecurityRuleArgs {
    /**
     * Consumers for Security Rule. Only one actor can be specified in one consumer block
     */
    consumers: pulumi.Input<pulumi.Input<inputs.SecurityRuleConsumer>[]>;
    /**
     * Description of Security Rule
     */
    description?: pulumi.Input<string>;
    /**
     * Enabled flag. Determines whether the rule will be enabled in ruleset or not
     */
    enabled: pulumi.Input<boolean>;
    /**
     * External data reference identifier
     */
    externalDataReference?: pulumi.Input<string>;
    /**
     * External data set identifier
     */
    externalDataSet?: pulumi.Input<string>;
    /**
     * Collection of Ingress Service. If resolve_label_as.providers list includes "workloads" then ingress_service is required.
     * Only one of the {"href"} or {"proto", "port", "to_port"} parameter combination is allowed
     */
    ingressServices?: pulumi.Input<pulumi.Input<inputs.SecurityRuleIngressService>[]>;
    /**
     * Determines whether machine authentication is enabled. Default value: false
     */
    machineAuth?: pulumi.Input<boolean>;
    /**
     * providers for Security Rule. Only one actor can be specified in one providers block
     */
    providers: pulumi.Input<pulumi.Input<inputs.SecurityRuleProvider>[]>;
    /**
     * resolve label as for Security rule
     */
    resolveLabelsAs: pulumi.Input<inputs.SecurityRuleResolveLabelsAs>;
    /**
     * URI of Rule set, in which security rule will be added
     */
    ruleSetHref: pulumi.Input<string>;
    /**
     * Determines whether a secure connection is established. Default value: false
     */
    secConnect?: pulumi.Input<boolean>;
    /**
     * Determines whether packet filtering is stateless for the rule. Default value: false
     */
    stateless?: pulumi.Input<boolean>;
    /**
     * If false (the default), the created Rule will be an intra-scope rule. If true, it will be extra-scope. Default value:
     * false
     */
    unscopedConsumers?: pulumi.Input<boolean>;
    /**
     * Whether to use workload subnets instead of IP addresses for providers/consumers. Allowed values are "providers" and/or
     * "consumers"
     */
    useWorkloadSubnets?: pulumi.Input<pulumi.Input<string>[]>;
}
