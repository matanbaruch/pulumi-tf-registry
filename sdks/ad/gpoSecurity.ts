// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GpoSecurity extends pulumi.CustomResource {
    /**
     * Get an existing GpoSecurity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GpoSecurityState, opts?: pulumi.CustomResourceOptions): GpoSecurity {
        return new GpoSecurity(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ad:index/gpoSecurity:GpoSecurity';

    /**
     * Returns true if the given object is an instance of GpoSecurity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GpoSecurity {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GpoSecurity.__pulumiType;
    }

    /**
     * Settings related to account lockout.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/2cd39c97-97cd-4859-a7b4-1229dad5f53d)
     */
    public readonly accountLockout!: pulumi.Output<outputs.GpoSecurityAccountLockout | undefined>;
    /**
     * Application log related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b9673a7-ce0a-49b4-912b-591efdb37cdf)
     */
    public readonly applicationLog!: pulumi.Output<outputs.GpoSecurityApplicationLog | undefined>;
    /**
     * Audit log related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b9673a7-ce0a-49b4-912b-591efdb37cdf)
     */
    public readonly auditLog!: pulumi.Output<outputs.GpoSecurityAuditLog | undefined>;
    /**
     * Event audit related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/01f8e057-f6a8-4d6e-8a00-99bcd241b403). Valid
     * values for all items below are: 0 (None), 1 (Success audits only), 2 (Failure audits only), 3 (Success and failure
     * audits), 4 (None)
     */
    public readonly eventAudit!: pulumi.Output<outputs.GpoSecurityEventAudit | undefined>;
    /**
     * Settings related to File System permissions.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/abeebe06-49aa-44d4-ae5b-d6aff458e8e7)
     */
    public readonly filesystems!: pulumi.Output<outputs.GpoSecurityFilesystem[] | undefined>;
    /**
     * The GUID of the container the security settings belong to.
     */
    public readonly gpoContainer!: pulumi.Output<string>;
    /**
     * Settings related to kerberos policies.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0fce5b92-bcc1-4b96-9c2b-56397c3f144f)
     */
    public readonly kerberosPolicy!: pulumi.Output<outputs.GpoSecurityKerberosPolicy | undefined>;
    /**
     * Settings related to password policies.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b40db09-d95d-40a6-8467-32aedec8140c)
     */
    public readonly passwordPolicies!: pulumi.Output<outputs.GpoSecurityPasswordPolicies | undefined>;
    /**
     * Settings related to Registry Keys.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/13712a60-de1e-4642-bd9c-ab054dd86278)
     */
    public readonly registryKeys!: pulumi.Output<outputs.GpoSecurityRegistryKey[] | undefined>;
    /**
     * Settings related to Registry Values.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/3a14ca47-a22f-43c5-b35e-6be791003ca7)
     */
    public readonly registryValues!: pulumi.Output<outputs.GpoSecurityRegistryValue[] | undefined>;
    /**
     * Settings related to Groups Membership.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/b73d8bae-ed22-48aa-acba-7065ab52d709)
     */
    public readonly restrictedGroups!: pulumi.Output<outputs.GpoSecurityRestrictedGroup[] | undefined>;
    /**
     * System log related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b9673a7-ce0a-49b4-912b-591efdb37cdf)
     */
    public readonly systemLog!: pulumi.Output<outputs.GpoSecuritySystemLog | undefined>;
    /**
     * Settings related to System Services.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/32deea3e-3fa4-414b-ba25-4121ad8c055c)
     */
    public readonly systemServices!: pulumi.Output<outputs.GpoSecuritySystemService[] | undefined>;

    /**
     * Create a GpoSecurity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GpoSecurityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GpoSecurityArgs | GpoSecurityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GpoSecurityState | undefined;
            resourceInputs["accountLockout"] = state ? state.accountLockout : undefined;
            resourceInputs["applicationLog"] = state ? state.applicationLog : undefined;
            resourceInputs["auditLog"] = state ? state.auditLog : undefined;
            resourceInputs["eventAudit"] = state ? state.eventAudit : undefined;
            resourceInputs["filesystems"] = state ? state.filesystems : undefined;
            resourceInputs["gpoContainer"] = state ? state.gpoContainer : undefined;
            resourceInputs["kerberosPolicy"] = state ? state.kerberosPolicy : undefined;
            resourceInputs["passwordPolicies"] = state ? state.passwordPolicies : undefined;
            resourceInputs["registryKeys"] = state ? state.registryKeys : undefined;
            resourceInputs["registryValues"] = state ? state.registryValues : undefined;
            resourceInputs["restrictedGroups"] = state ? state.restrictedGroups : undefined;
            resourceInputs["systemLog"] = state ? state.systemLog : undefined;
            resourceInputs["systemServices"] = state ? state.systemServices : undefined;
        } else {
            const args = argsOrState as GpoSecurityArgs | undefined;
            if ((!args || args.gpoContainer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gpoContainer'");
            }
            resourceInputs["accountLockout"] = args ? args.accountLockout : undefined;
            resourceInputs["applicationLog"] = args ? args.applicationLog : undefined;
            resourceInputs["auditLog"] = args ? args.auditLog : undefined;
            resourceInputs["eventAudit"] = args ? args.eventAudit : undefined;
            resourceInputs["filesystems"] = args ? args.filesystems : undefined;
            resourceInputs["gpoContainer"] = args ? args.gpoContainer : undefined;
            resourceInputs["kerberosPolicy"] = args ? args.kerberosPolicy : undefined;
            resourceInputs["passwordPolicies"] = args ? args.passwordPolicies : undefined;
            resourceInputs["registryKeys"] = args ? args.registryKeys : undefined;
            resourceInputs["registryValues"] = args ? args.registryValues : undefined;
            resourceInputs["restrictedGroups"] = args ? args.restrictedGroups : undefined;
            resourceInputs["systemLog"] = args ? args.systemLog : undefined;
            resourceInputs["systemServices"] = args ? args.systemServices : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GpoSecurity.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GpoSecurity resources.
 */
export interface GpoSecurityState {
    /**
     * Settings related to account lockout.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/2cd39c97-97cd-4859-a7b4-1229dad5f53d)
     */
    accountLockout?: pulumi.Input<inputs.GpoSecurityAccountLockout>;
    /**
     * Application log related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b9673a7-ce0a-49b4-912b-591efdb37cdf)
     */
    applicationLog?: pulumi.Input<inputs.GpoSecurityApplicationLog>;
    /**
     * Audit log related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b9673a7-ce0a-49b4-912b-591efdb37cdf)
     */
    auditLog?: pulumi.Input<inputs.GpoSecurityAuditLog>;
    /**
     * Event audit related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/01f8e057-f6a8-4d6e-8a00-99bcd241b403). Valid
     * values for all items below are: 0 (None), 1 (Success audits only), 2 (Failure audits only), 3 (Success and failure
     * audits), 4 (None)
     */
    eventAudit?: pulumi.Input<inputs.GpoSecurityEventAudit>;
    /**
     * Settings related to File System permissions.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/abeebe06-49aa-44d4-ae5b-d6aff458e8e7)
     */
    filesystems?: pulumi.Input<pulumi.Input<inputs.GpoSecurityFilesystem>[]>;
    /**
     * The GUID of the container the security settings belong to.
     */
    gpoContainer?: pulumi.Input<string>;
    /**
     * Settings related to kerberos policies.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0fce5b92-bcc1-4b96-9c2b-56397c3f144f)
     */
    kerberosPolicy?: pulumi.Input<inputs.GpoSecurityKerberosPolicy>;
    /**
     * Settings related to password policies.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b40db09-d95d-40a6-8467-32aedec8140c)
     */
    passwordPolicies?: pulumi.Input<inputs.GpoSecurityPasswordPolicies>;
    /**
     * Settings related to Registry Keys.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/13712a60-de1e-4642-bd9c-ab054dd86278)
     */
    registryKeys?: pulumi.Input<pulumi.Input<inputs.GpoSecurityRegistryKey>[]>;
    /**
     * Settings related to Registry Values.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/3a14ca47-a22f-43c5-b35e-6be791003ca7)
     */
    registryValues?: pulumi.Input<pulumi.Input<inputs.GpoSecurityRegistryValue>[]>;
    /**
     * Settings related to Groups Membership.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/b73d8bae-ed22-48aa-acba-7065ab52d709)
     */
    restrictedGroups?: pulumi.Input<pulumi.Input<inputs.GpoSecurityRestrictedGroup>[]>;
    /**
     * System log related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b9673a7-ce0a-49b4-912b-591efdb37cdf)
     */
    systemLog?: pulumi.Input<inputs.GpoSecuritySystemLog>;
    /**
     * Settings related to System Services.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/32deea3e-3fa4-414b-ba25-4121ad8c055c)
     */
    systemServices?: pulumi.Input<pulumi.Input<inputs.GpoSecuritySystemService>[]>;
}

/**
 * The set of arguments for constructing a GpoSecurity resource.
 */
export interface GpoSecurityArgs {
    /**
     * Settings related to account lockout.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/2cd39c97-97cd-4859-a7b4-1229dad5f53d)
     */
    accountLockout?: pulumi.Input<inputs.GpoSecurityAccountLockout>;
    /**
     * Application log related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b9673a7-ce0a-49b4-912b-591efdb37cdf)
     */
    applicationLog?: pulumi.Input<inputs.GpoSecurityApplicationLog>;
    /**
     * Audit log related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b9673a7-ce0a-49b4-912b-591efdb37cdf)
     */
    auditLog?: pulumi.Input<inputs.GpoSecurityAuditLog>;
    /**
     * Event audit related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/01f8e057-f6a8-4d6e-8a00-99bcd241b403). Valid
     * values for all items below are: 0 (None), 1 (Success audits only), 2 (Failure audits only), 3 (Success and failure
     * audits), 4 (None)
     */
    eventAudit?: pulumi.Input<inputs.GpoSecurityEventAudit>;
    /**
     * Settings related to File System permissions.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/abeebe06-49aa-44d4-ae5b-d6aff458e8e7)
     */
    filesystems?: pulumi.Input<pulumi.Input<inputs.GpoSecurityFilesystem>[]>;
    /**
     * The GUID of the container the security settings belong to.
     */
    gpoContainer: pulumi.Input<string>;
    /**
     * Settings related to kerberos policies.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0fce5b92-bcc1-4b96-9c2b-56397c3f144f)
     */
    kerberosPolicy?: pulumi.Input<inputs.GpoSecurityKerberosPolicy>;
    /**
     * Settings related to password policies.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b40db09-d95d-40a6-8467-32aedec8140c)
     */
    passwordPolicies?: pulumi.Input<inputs.GpoSecurityPasswordPolicies>;
    /**
     * Settings related to Registry Keys.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/13712a60-de1e-4642-bd9c-ab054dd86278)
     */
    registryKeys?: pulumi.Input<pulumi.Input<inputs.GpoSecurityRegistryKey>[]>;
    /**
     * Settings related to Registry Values.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/3a14ca47-a22f-43c5-b35e-6be791003ca7)
     */
    registryValues?: pulumi.Input<pulumi.Input<inputs.GpoSecurityRegistryValue>[]>;
    /**
     * Settings related to Groups Membership.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/b73d8bae-ed22-48aa-acba-7065ab52d709)
     */
    restrictedGroups?: pulumi.Input<pulumi.Input<inputs.GpoSecurityRestrictedGroup>[]>;
    /**
     * System log related settings.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/0b9673a7-ce0a-49b4-912b-591efdb37cdf)
     */
    systemLog?: pulumi.Input<inputs.GpoSecuritySystemLog>;
    /**
     * Settings related to System Services.
     * (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-gpsb/32deea3e-3fa4-414b-ba25-4121ad8c055c)
     */
    systemServices?: pulumi.Input<pulumi.Input<inputs.GpoSecuritySystemService>[]>;
}
