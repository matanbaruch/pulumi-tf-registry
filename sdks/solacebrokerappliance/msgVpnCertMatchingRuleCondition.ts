// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnCertMatchingRuleCondition extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnCertMatchingRuleCondition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnCertMatchingRuleConditionState, opts?: pulumi.CustomResourceOptions): MsgVpnCertMatchingRuleCondition {
        return new MsgVpnCertMatchingRuleCondition(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebrokerappliance:index/msgVpnCertMatchingRuleCondition:MsgVpnCertMatchingRuleCondition';

    /**
     * Returns true if the given object is an instance of MsgVpnCertMatchingRuleCondition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnCertMatchingRuleCondition {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnCertMatchingRuleCondition.__pulumiType;
    }

    /**
     * Client Username Attribute to be compared with certificate content. Either an attribute or an expression must be provided
     * on creation, but not both. The default value is `""`. Note that this attribute requires replacement of the resource when
     * updated.
     */
    public readonly attribute!: pulumi.Output<string | undefined>;
    /**
     * Glob expression to be matched with certificate content. Either an expression or an attribute must be provided on
     * creation, but not both. The default value is `""`. Note that this attribute requires replacement of the resource when
     * updated.
     */
    public readonly expression!: pulumi.Output<string | undefined>;
    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;
    /**
     * The name of the rule.
     */
    public readonly ruleName!: pulumi.Output<string>;
    /**
     * Certificate field to be compared with the Attribute. The allowed values and their meaning are: <pre>
     * "certificate-thumbprint" - The attribute is computed as the SHA-1 hash over the entire DER-encoded contents of the
     * client certificate. "common-name" - The attribute is extracted from the certificate's first instance of the Common Name
     * attribute in the Subject DN. "common-name-last" - The attribute is extracted from the certificate's last instance of the
     * Common Name attribute in the Subject DN. "subject-alternate-name-msupn" - The attribute is extracted from the
     * certificate's Other Name type of the Subject Alternative Name and must have the msUPN signature. "uid" - The attribute
     * is extracted from the certificate's first instance of the User Identifier attribute in the Subject DN. "uid-last" - The
     * attribute is extracted from the certificate's last instance of the User Identifier attribute in the Subject DN.
     * "org-unit" - The attribute is extracted from the certificate's first instance of the Org Unit attribute in the Subject
     * DN. "org-unit-last" - The attribute is extracted from the certificate's last instance of the Org Unit attribute in the
     * Subject DN. "issuer" - The attribute is extracted from the certificate's Issuer DN. "subject" - The attribute is
     * extracted from the certificate's Subject DN. "serial-number" - The attribute is extracted from the certificate's Serial
     * Number. "dns-name" - The attribute is extracted from the certificate's Subject Alt Name DNS Name. "ip-address" - The
     * attribute is extracted from the certificate's Subject Alt Name IP Address. </pre>
     */
    public readonly source!: pulumi.Output<string>;

    /**
     * Create a MsgVpnCertMatchingRuleCondition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnCertMatchingRuleConditionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnCertMatchingRuleConditionArgs | MsgVpnCertMatchingRuleConditionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnCertMatchingRuleConditionState | undefined;
            resourceInputs["attribute"] = state ? state.attribute : undefined;
            resourceInputs["expression"] = state ? state.expression : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
            resourceInputs["ruleName"] = state ? state.ruleName : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
        } else {
            const args = argsOrState as MsgVpnCertMatchingRuleConditionArgs | undefined;
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            if ((!args || args.ruleName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ruleName'");
            }
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["attribute"] = args ? args.attribute : undefined;
            resourceInputs["expression"] = args ? args.expression : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
            resourceInputs["ruleName"] = args ? args.ruleName : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnCertMatchingRuleCondition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnCertMatchingRuleCondition resources.
 */
export interface MsgVpnCertMatchingRuleConditionState {
    /**
     * Client Username Attribute to be compared with certificate content. Either an attribute or an expression must be provided
     * on creation, but not both. The default value is `""`. Note that this attribute requires replacement of the resource when
     * updated.
     */
    attribute?: pulumi.Input<string>;
    /**
     * Glob expression to be matched with certificate content. Either an expression or an attribute must be provided on
     * creation, but not both. The default value is `""`. Note that this attribute requires replacement of the resource when
     * updated.
     */
    expression?: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    ruleName?: pulumi.Input<string>;
    /**
     * Certificate field to be compared with the Attribute. The allowed values and their meaning are: <pre>
     * "certificate-thumbprint" - The attribute is computed as the SHA-1 hash over the entire DER-encoded contents of the
     * client certificate. "common-name" - The attribute is extracted from the certificate's first instance of the Common Name
     * attribute in the Subject DN. "common-name-last" - The attribute is extracted from the certificate's last instance of the
     * Common Name attribute in the Subject DN. "subject-alternate-name-msupn" - The attribute is extracted from the
     * certificate's Other Name type of the Subject Alternative Name and must have the msUPN signature. "uid" - The attribute
     * is extracted from the certificate's first instance of the User Identifier attribute in the Subject DN. "uid-last" - The
     * attribute is extracted from the certificate's last instance of the User Identifier attribute in the Subject DN.
     * "org-unit" - The attribute is extracted from the certificate's first instance of the Org Unit attribute in the Subject
     * DN. "org-unit-last" - The attribute is extracted from the certificate's last instance of the Org Unit attribute in the
     * Subject DN. "issuer" - The attribute is extracted from the certificate's Issuer DN. "subject" - The attribute is
     * extracted from the certificate's Subject DN. "serial-number" - The attribute is extracted from the certificate's Serial
     * Number. "dns-name" - The attribute is extracted from the certificate's Subject Alt Name DNS Name. "ip-address" - The
     * attribute is extracted from the certificate's Subject Alt Name IP Address. </pre>
     */
    source?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnCertMatchingRuleCondition resource.
 */
export interface MsgVpnCertMatchingRuleConditionArgs {
    /**
     * Client Username Attribute to be compared with certificate content. Either an attribute or an expression must be provided
     * on creation, but not both. The default value is `""`. Note that this attribute requires replacement of the resource when
     * updated.
     */
    attribute?: pulumi.Input<string>;
    /**
     * Glob expression to be matched with certificate content. Either an expression or an attribute must be provided on
     * creation, but not both. The default value is `""`. Note that this attribute requires replacement of the resource when
     * updated.
     */
    expression?: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    ruleName: pulumi.Input<string>;
    /**
     * Certificate field to be compared with the Attribute. The allowed values and their meaning are: <pre>
     * "certificate-thumbprint" - The attribute is computed as the SHA-1 hash over the entire DER-encoded contents of the
     * client certificate. "common-name" - The attribute is extracted from the certificate's first instance of the Common Name
     * attribute in the Subject DN. "common-name-last" - The attribute is extracted from the certificate's last instance of the
     * Common Name attribute in the Subject DN. "subject-alternate-name-msupn" - The attribute is extracted from the
     * certificate's Other Name type of the Subject Alternative Name and must have the msUPN signature. "uid" - The attribute
     * is extracted from the certificate's first instance of the User Identifier attribute in the Subject DN. "uid-last" - The
     * attribute is extracted from the certificate's last instance of the User Identifier attribute in the Subject DN.
     * "org-unit" - The attribute is extracted from the certificate's first instance of the Org Unit attribute in the Subject
     * DN. "org-unit-last" - The attribute is extracted from the certificate's last instance of the Org Unit attribute in the
     * Subject DN. "issuer" - The attribute is extracted from the certificate's Issuer DN. "subject" - The attribute is
     * extracted from the certificate's Subject DN. "serial-number" - The attribute is extracted from the certificate's Serial
     * Number. "dns-name" - The attribute is extracted from the certificate's Subject Alt Name DNS Name. "ip-address" - The
     * attribute is extracted from the certificate's Subject Alt Name IP Address. </pre>
     */
    source: pulumi.Input<string>;
}
