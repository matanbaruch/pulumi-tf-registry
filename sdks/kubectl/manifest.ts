// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Manifest extends pulumi.CustomResource {
    /**
     * Get an existing Manifest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManifestState, opts?: pulumi.CustomResourceOptions): Manifest {
        return new Manifest(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubectl:index/manifest:Manifest';

    /**
     * Returns true if the given object is an instance of Manifest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Manifest {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Manifest.__pulumiType;
    }

    public /*out*/ readonly apiVersion!: pulumi.Output<string>;
    /**
     * Apply only. In other words, it does not delete resource in any case.
     */
    public readonly applyOnly!: pulumi.Output<boolean | undefined>;
    /**
     * Default false.
     */
    public readonly forceConflicts!: pulumi.Output<boolean | undefined>;
    /**
     * Default to update in-place. Setting to true will delete and create the kubernetes instead.
     */
    public readonly forceNew!: pulumi.Output<boolean | undefined>;
    /**
     * List of yaml keys to ignore changes to. Set these for fields set by Operators or other processes in kubernetes and as
     * such you don't want to update.
     */
    public readonly ignoreFields!: pulumi.Output<string[] | undefined>;
    public /*out*/ readonly kind!: pulumi.Output<string>;
    public /*out*/ readonly liveManifestIncluster!: pulumi.Output<string>;
    public /*out*/ readonly liveUid!: pulumi.Output<string>;
    public /*out*/ readonly name!: pulumi.Output<string>;
    public /*out*/ readonly namespace!: pulumi.Output<string>;
    /**
     * Override the namespace to apply the kubernetes resource to
     */
    public readonly overrideNamespace!: pulumi.Output<string | undefined>;
    /**
     * List of yaml keys with sensitive values. Set these for fields which you want obfuscated in the yaml_body output
     */
    public readonly sensitiveFields!: pulumi.Output<string[] | undefined>;
    /**
     * Default to client-side-apply. Setting to true will use server-side apply.
     */
    public readonly serverSideApply!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ManifestTimeouts | undefined>;
    public /*out*/ readonly uid!: pulumi.Output<string>;
    /**
     * Default to true (validate). Set this flag to not validate the yaml schema before appying.
     */
    public readonly validateSchema!: pulumi.Output<boolean | undefined>;
    /**
     * Default to false (not waiting). Set this flag to wait or not for any deleted resources to be gone. This waits for
     * finalizers.
     */
    public readonly wait!: pulumi.Output<boolean | undefined>;
    /**
     * Default to true (waiting). Set this flag to wait or not for Deployments and APIService to complete rollout
     */
    public readonly waitForRollout!: pulumi.Output<boolean | undefined>;
    public readonly yamlBody!: pulumi.Output<string>;
    /**
     * Yaml body that is being applied, with sensitive values obfuscated
     */
    public /*out*/ readonly yamlBodyParsed!: pulumi.Output<string>;
    public /*out*/ readonly yamlIncluster!: pulumi.Output<string>;

    /**
     * Create a Manifest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManifestArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManifestArgs | ManifestState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManifestState | undefined;
            resourceInputs["apiVersion"] = state ? state.apiVersion : undefined;
            resourceInputs["applyOnly"] = state ? state.applyOnly : undefined;
            resourceInputs["forceConflicts"] = state ? state.forceConflicts : undefined;
            resourceInputs["forceNew"] = state ? state.forceNew : undefined;
            resourceInputs["ignoreFields"] = state ? state.ignoreFields : undefined;
            resourceInputs["kind"] = state ? state.kind : undefined;
            resourceInputs["liveManifestIncluster"] = state ? state.liveManifestIncluster : undefined;
            resourceInputs["liveUid"] = state ? state.liveUid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["overrideNamespace"] = state ? state.overrideNamespace : undefined;
            resourceInputs["sensitiveFields"] = state ? state.sensitiveFields : undefined;
            resourceInputs["serverSideApply"] = state ? state.serverSideApply : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
            resourceInputs["validateSchema"] = state ? state.validateSchema : undefined;
            resourceInputs["wait"] = state ? state.wait : undefined;
            resourceInputs["waitForRollout"] = state ? state.waitForRollout : undefined;
            resourceInputs["yamlBody"] = state ? state.yamlBody : undefined;
            resourceInputs["yamlBodyParsed"] = state ? state.yamlBodyParsed : undefined;
            resourceInputs["yamlIncluster"] = state ? state.yamlIncluster : undefined;
        } else {
            const args = argsOrState as ManifestArgs | undefined;
            if ((!args || args.yamlBody === undefined) && !opts.urn) {
                throw new Error("Missing required property 'yamlBody'");
            }
            resourceInputs["applyOnly"] = args ? args.applyOnly : undefined;
            resourceInputs["forceConflicts"] = args ? args.forceConflicts : undefined;
            resourceInputs["forceNew"] = args ? args.forceNew : undefined;
            resourceInputs["ignoreFields"] = args ? args.ignoreFields : undefined;
            resourceInputs["overrideNamespace"] = args ? args.overrideNamespace : undefined;
            resourceInputs["sensitiveFields"] = args ? args.sensitiveFields : undefined;
            resourceInputs["serverSideApply"] = args ? args.serverSideApply : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["validateSchema"] = args ? args.validateSchema : undefined;
            resourceInputs["wait"] = args ? args.wait : undefined;
            resourceInputs["waitForRollout"] = args ? args.waitForRollout : undefined;
            resourceInputs["yamlBody"] = args?.yamlBody ? pulumi.secret(args.yamlBody) : undefined;
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["liveManifestIncluster"] = undefined /*out*/;
            resourceInputs["liveUid"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["namespace"] = undefined /*out*/;
            resourceInputs["uid"] = undefined /*out*/;
            resourceInputs["yamlBodyParsed"] = undefined /*out*/;
            resourceInputs["yamlIncluster"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["liveManifestIncluster", "yamlBody", "yamlIncluster"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Manifest.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Manifest resources.
 */
export interface ManifestState {
    apiVersion?: pulumi.Input<string>;
    /**
     * Apply only. In other words, it does not delete resource in any case.
     */
    applyOnly?: pulumi.Input<boolean>;
    /**
     * Default false.
     */
    forceConflicts?: pulumi.Input<boolean>;
    /**
     * Default to update in-place. Setting to true will delete and create the kubernetes instead.
     */
    forceNew?: pulumi.Input<boolean>;
    /**
     * List of yaml keys to ignore changes to. Set these for fields set by Operators or other processes in kubernetes and as
     * such you don't want to update.
     */
    ignoreFields?: pulumi.Input<pulumi.Input<string>[]>;
    kind?: pulumi.Input<string>;
    liveManifestIncluster?: pulumi.Input<string>;
    liveUid?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    /**
     * Override the namespace to apply the kubernetes resource to
     */
    overrideNamespace?: pulumi.Input<string>;
    /**
     * List of yaml keys with sensitive values. Set these for fields which you want obfuscated in the yaml_body output
     */
    sensitiveFields?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Default to client-side-apply. Setting to true will use server-side apply.
     */
    serverSideApply?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.ManifestTimeouts>;
    uid?: pulumi.Input<string>;
    /**
     * Default to true (validate). Set this flag to not validate the yaml schema before appying.
     */
    validateSchema?: pulumi.Input<boolean>;
    /**
     * Default to false (not waiting). Set this flag to wait or not for any deleted resources to be gone. This waits for
     * finalizers.
     */
    wait?: pulumi.Input<boolean>;
    /**
     * Default to true (waiting). Set this flag to wait or not for Deployments and APIService to complete rollout
     */
    waitForRollout?: pulumi.Input<boolean>;
    yamlBody?: pulumi.Input<string>;
    /**
     * Yaml body that is being applied, with sensitive values obfuscated
     */
    yamlBodyParsed?: pulumi.Input<string>;
    yamlIncluster?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Manifest resource.
 */
export interface ManifestArgs {
    /**
     * Apply only. In other words, it does not delete resource in any case.
     */
    applyOnly?: pulumi.Input<boolean>;
    /**
     * Default false.
     */
    forceConflicts?: pulumi.Input<boolean>;
    /**
     * Default to update in-place. Setting to true will delete and create the kubernetes instead.
     */
    forceNew?: pulumi.Input<boolean>;
    /**
     * List of yaml keys to ignore changes to. Set these for fields set by Operators or other processes in kubernetes and as
     * such you don't want to update.
     */
    ignoreFields?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Override the namespace to apply the kubernetes resource to
     */
    overrideNamespace?: pulumi.Input<string>;
    /**
     * List of yaml keys with sensitive values. Set these for fields which you want obfuscated in the yaml_body output
     */
    sensitiveFields?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Default to client-side-apply. Setting to true will use server-side apply.
     */
    serverSideApply?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.ManifestTimeouts>;
    /**
     * Default to true (validate). Set this flag to not validate the yaml schema before appying.
     */
    validateSchema?: pulumi.Input<boolean>;
    /**
     * Default to false (not waiting). Set this flag to wait or not for any deleted resources to be gone. This waits for
     * finalizers.
     */
    wait?: pulumi.Input<boolean>;
    /**
     * Default to true (waiting). Set this flag to wait or not for Deployments and APIService to complete rollout
     */
    waitForRollout?: pulumi.Input<boolean>;
    yamlBody: pulumi.Input<string>;
}
